// Testes de Segurança automatizados para o E-commerce iPhocell
// Executável via Node.js: `node tests/security.test.js`

const assert = require('assert').strict;

// Mock simplificado do ambiente de navegador
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = value.toString();
  },
  removeItem(key) {
    delete this.store[key];
  }
};

// Carregar funções de sanitização e validação de segurança
// 🔒 SEGURANÇA: Copiadas diretamente do código em assets/js/cart.js
function sanitizeHTML(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function getSafeJSON(key, defaultValue) {
  try {
    const raw = global.localStorage.getItem(key);
    if (!raw) return defaultValue;
    const parsed = JSON.parse(raw, (k, v) => {
      if (k === '__proto__' || k === 'constructor' || k === 'prototype') {
        throw new Error('Tentativa de poluição de protótipo detectada');
      }
      return v;
    });
    
    if (typeof parsed !== 'object' || parsed === null) {
      return defaultValue;
    }
    
    return parsed;
  } catch (e) {
    global.localStorage.removeItem(key);
    return defaultValue;
  }
}

// ==========================================================================
// TESTES
// ==========================================================================

console.log("⚡ Executando testes de segurança para a iPhocell...\n");

// Teste 1: XSS Mitigation
try {
  const payload = '<script>alert("XSS")</script>';
  const sanitized = sanitizeHTML(payload);
  assert.strictEqual(sanitized.includes("<script>"), false);
  assert.strictEqual(sanitized.includes("</script>"), false);
  assert.strictEqual(sanitized, '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;');
  console.log("✅ VULN-1 (XSS): Sanitização bem sucedida. Script tag escapada com sucesso.");
} catch (e) {
  console.error("❌ Falha no Teste 1:", e.message);
  process.exit(1);
}

// Teste 2: XSS com aspas e outros caracteres perigosos
try {
  const payload = '"><img src=x onerror=alert(1)>';
  const sanitized = sanitizeHTML(payload);
  assert.strictEqual(sanitized.includes('"'), false);
  assert.strictEqual(sanitized.includes('<'), false);
  assert.strictEqual(sanitized, '&quot;&gt;&lt;img src=x onerror=alert(1)&gt;');
  console.log("✅ VULN-2 (XSS): Atributo de quebra HTML sanitizado com sucesso.");
} catch (e) {
  console.error("❌ Falha no Teste 2:", e.message);
  process.exit(1);
}

// Teste 3: Prevenção de Poluição de Protótipo no localStorage (getSafeJSON)
try {
  const exploitPayload = '{"__proto__": {"polluted": "yes"}, "id": "iphone-13"}';
  global.localStorage.setItem('iphocell_cart', exploitPayload);
  
  const result = getSafeJSON('iphocell_cart', []);
  
  // O resultado deve retornar o valor padrão [] porque a poluição foi detectada
  assert.deepStrictEqual(result, []);
  assert.strictEqual(global.localStorage.getItem('iphocell_cart'), null); // deve ter sido removido por segurança
  assert.strictEqual({}.polluted, undefined); // O protótipo global de Object não deve ser poluído
  
  console.log("✅ VULN-3 (Prototype Pollution): Payload malicioso detectado e descartado com sucesso.");
} catch (e) {
  console.error("❌ Falha no Teste 3:", e.message);
  process.exit(1);
}

// Teste 4: Input malicioso aninhado em sub-objetos
try {
  const exploitNested = '{"name": "Normal Product", "details": {"constructor": {"prototype": {"pollutedNested": "yes"}}}}';
  global.localStorage.setItem('iphocell_cart_nested', exploitNested);
  
  const result = getSafeJSON('iphocell_cart_nested', []);
  
  assert.deepStrictEqual(result, []);
  assert.strictEqual(global.localStorage.getItem('iphocell_cart_nested'), null);
  assert.strictEqual({}.pollutedNested, undefined);
  
  console.log("✅ VULN-4 (Nested Prototype Pollution): Payload aninhado detectado e descartado com sucesso.");
} catch (e) {
  console.error("❌ Falha no Teste 4:", e.message);
  process.exit(1);
}

// Teste 5: Carregamento de dados legítimos
try {
  const validData = JSON.stringify([{ id: "iphone-15", quantity: 2 }]);
  global.localStorage.setItem('iphocell_cart_valid', validData);
  
  const result = getSafeJSON('iphocell_cart_valid', []);
  
  assert.deepStrictEqual(result, [{ id: "iphone-15", quantity: 2 }]);
  console.log("✅ VULN-5 (Lógica): Dados legítimos parsed sem alertas de segurança.");
} catch (e) {
  console.error("❌ Falha no Teste 5:", e.message);
  process.exit(1);
}

console.log("\n🎉 TODOS OS TESTES DE SEGURANÇA PASSARAM COM SUCESSO!");
