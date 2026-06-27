// Banco de dados de produtos da iPhocell - Atualizado com Preços Reais
const products = [
  {
    id: "iphone-xr-64-preto",
    name: "iPhone Xr 64GB Preto",
    model: "iPhone Xr",
    condition: "seminovo",
    price: 800.00,
    installments: 12,
    storage: "64GB",
    color: "Preto",
    colorHex: "#1C1D21",
    category: "iphone",
    images: ["assets/images/iphonexr.webp", "assets/images/iphonexr-preto2.webp", "assets/images/iphonexr-preto3.png", "assets/images/iphonexr-preto4.webp"],
    inStock: true,
    isNew: false,
    description: "O iPhone Xr traz a brilhante tela Liquid Retina de 6,1 polegadas, o desempenho veloz do chip A12 Bionic e uma câmera traseira avançada de 12MP com modo Retrato.",
    specs: {
      chip: "A12 Bionic",
      camera: "Traseira de 12MP e Frontal TrueDepth de 7MP",
      battery: "Até 16 horas de reprodução de vídeo",
      screen: "LCD Liquid Retina HD de 6,1 polegadas",
      os: "iOS 17 compatível"
    }
  },
  {
    id: "iphone-11-64-branco",
    name: "iPhone 11 64GB Branco",
    model: "iPhone 11",
    condition: "seminovo",
    price: 1100.00,
    installments: 12,
    storage: "64GB",
    color: "Branco",
    colorHex: "#F0EFEA",
    category: "iphone",
    images: ["assets/images/iphone11-branco.webp", "assets/images/iphone11-branco2.webp", "assets/images/iphone11-branco3.webp", "assets/images/iphone11-branco4.webp"],
    inStock: true,
    isNew: false,
    description: "O iPhone 11 possui um sistema de câmera dupla brilhante para capturar fotos ultra-angulares incríveis, modo Noite e vídeos em 4K. Chip A13 Bionic e bateria para o dia todo.",
    specs: {
      chip: "A13 Bionic",
      camera: "Dupla 12MP (Ultra-angular e Angular) com modo Noite",
      battery: "Até 17 horas de reprodução de vídeo",
      screen: "LCD Liquid Retina HD de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-11-128-branco",
    name: "iPhone 11 128GB Branco",
    model: "iPhone 11",
    condition: "seminovo",
    price: 1200.00,
    installments: 12,
    storage: "128GB",
    color: "Branco",
    colorHex: "#F0EFEA",
    category: "iphone",
    images: ["assets/images/iphone11-branco.webp", "assets/images/iphone11-branco2.webp", "assets/images/iphone11-branco3.webp", "assets/images/iphone11-branco4.webp"],
    inStock: true,
    isNew: false,
    description: "O iPhone 11 possui um sistema de câmera dupla brilhante para capturar fotos ultra-angulares incríveis, modo Noite e vídeos em 4K. Chip A13 Bionic e bateria para o dia todo.",
    specs: {
      chip: "A13 Bionic",
      camera: "Dupla 12MP (Ultra-angular e Angular) com modo Noite",
      battery: "Até 17 horas de reprodução de vídeo",
      screen: "LCD Liquid Retina HD de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-11-promax-64-cinza",
    name: "iPhone 11 Pro Max 64GB Cinza Espacial",
    model: "iPhone 11 Pro Max",
    condition: "seminovo",
    price: 1400.00,
    installments: 12,
    storage: "64GB",
    color: "Cinza Espacial",
    colorHex: "#4E5052",
    category: "iphone",
    images: ["assets/images/11promax-cinza.webp", "assets/images/11promax-cinza2.webp", "assets/images/11promax-cinza3.webp", "assets/images/11promax-cinza4.webp"],
    inStock: true,
    isNew: false,
    description: "O iPhone 11 Pro Max traz o sistema de câmera tripla profissional, tela Super Retina XDR de 6,5 polegadas de alta definição e o eficiente chip A13 Bionic.",
    specs: {
      chip: "A13 Bionic",
      camera: "Tripla 12MP (Teleobjetiva, Grande-angular e Ultra-angular)",
      battery: "Até 20 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,5 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-11-promax-256-cinza",
    name: "iPhone 11 Pro Max 256GB Cinza Espacial",
    model: "iPhone 11 Pro Max",
    condition: "seminovo",
    price: 1600.00,
    installments: 12,
    storage: "256GB",
    color: "Cinza Espacial",
    colorHex: "#4E5052",
    category: "iphone",
    images: ["assets/images/11promax-cinza.webp", "assets/images/11promax-cinza2.webp", "assets/images/11promax-cinza3.webp", "assets/images/11promax-cinza4.webp"],
    inStock: true,
    isNew: false,
    description: "O iPhone 11 Pro Max traz o sistema de câmera tripla profissional, tela Super Retina XDR de 6,5 polegadas de alta definição e o eficiente chip A13 Bionic.",
    specs: {
      chip: "A13 Bionic",
      camera: "Tripla 12MP (Teleobjetiva, Grande-angular e Ultra-angular)",
      battery: "Até 20 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,5 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-12-64-azul",
    name: "iPhone 12 64GB Azul",
    model: "iPhone 12",
    condition: "seminovo",
    price: 1400.00,
    installments: 12,
    storage: "64GB",
    color: "Azul",
    colorHex: "#1D3A4E",
    category: "iphone",
    images: ["assets/images/iphone12-azul.webp", "assets/images/iphone12-azul2.webp", "assets/images/iphone12-azul3.webp", "assets/images/iphone12-azul4.webp"],
    inStock: true,
    isNew: false,
    description: "iPhone 12 com velocidade 5G. Tela Super Retina XDR de alta definição. Ceramic Shield, quatro vezes mais resistente a quedas. Excelente câmera dupla para fotos no escuro.",
    specs: {
      chip: "A14 Bionic",
      camera: "Dupla 12MP (Ultra-angular e Angular) com modo Noite",
      battery: "Até 17 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-12-128-azul",
    name: "iPhone 12 128GB Azul",
    model: "iPhone 12",
    condition: "seminovo",
    price: 1600.00,
    installments: 12,
    storage: "128GB",
    color: "Azul",
    colorHex: "#1D3A4E",
    category: "iphone",
    images: ["assets/images/iphone12-azul.webp", "assets/images/iphone12-azul2.webp", "assets/images/iphone12-azul3.webp", "assets/images/iphone12-azul4.webp"],
    inStock: true,
    isNew: false,
    description: "iPhone 12 com velocidade 5G. Tela Super Retina XDR de alta definição. Ceramic Shield, quatro vezes mais resistente a quedas. Excelente câmera dupla para fotos no escuro.",
    specs: {
      chip: "A14 Bionic",
      camera: "Dupla 12MP (Ultra-angular e Angular) com modo Noite",
      battery: "Até 17 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-12-256-azul",
    name: "iPhone 12 256GB Azul",
    model: "iPhone 12",
    condition: "seminovo",
    price: 1800.00,
    installments: 12,
    storage: "256GB",
    color: "Azul",
    colorHex: "#1D3A4E",
    category: "iphone",
    images: ["assets/images/iphone12-azul.webp", "assets/images/iphone12-azul2.webp", "assets/images/iphone12-azul3.webp", "assets/images/iphone12-azul4.webp"],
    inStock: true,
    isNew: false,
    description: "iPhone 12 com velocidade 5G. Tela Super Retina XDR de alta definição. Ceramic Shield, quatro vezes mais resistente a quedas. Excelente câmera dupla para fotos no escuro.",
    specs: {
      chip: "A14 Bionic",
      camera: "Dupla 12MP (Ultra-angular e Angular) com modo Noite",
      battery: "Até 17 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-12-pro-128-grafite",
    name: "iPhone 12 Pro 128GB Grafite",
    model: "iPhone 12 Pro",
    condition: "seminovo",
    price: 1900.00,
    installments: 12,
    storage: "128GB",
    color: "Grafite",
    colorHex: "#5C5D5F",
    category: "iphone",
    images: ["assets/images/iphone12pro.webp", "assets/images/iphone12pro2.webp", "assets/images/iphone12pro3.webp", "assets/images/iphone12pro4.webp"],
    inStock: true,
    isNew: false,
    description: "O iPhone 12 Pro eleva a experiência com um chassi de aço inoxidável premium, sistema de câmera tripla Pro, scanner LiDAR para foco avançado e processamento Apple ProRAW.",
    specs: {
      chip: "A14 Bionic",
      camera: "Tripla 12MP (Grande-angular, Ultra-angular e Teleobjetiva) com Scanner LiDAR",
      battery: "Até 17 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-12-pro-256-grafite",
    name: "iPhone 12 Pro 256GB Grafite",
    model: "iPhone 12 Pro",
    condition: "seminovo",
    price: 2100.00,
    installments: 12,
    storage: "256GB",
    color: "Grafite",
    colorHex: "#5C5D5F",
    category: "iphone",
    images: ["assets/images/iphone12pro.webp", "assets/images/iphone12pro2.webp", "assets/images/iphone12pro3.webp", "assets/images/iphone12pro4.webp"],
    inStock: false,
    isNew: false,
    description: "O iPhone 12 Pro eleva a experiência com um chassi de aço inoxidável premium, sistema de câmera tripla Pro, scanner LiDAR para foco avançado e processamento Apple ProRAW.",
    specs: {
      chip: "A14 Bionic",
      camera: "Tripla 12MP (Grande-angular, Ultra-angular e Teleobjetiva) com Scanner LiDAR",
      battery: "Até 17 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-12-promax-128-azul",
    name: "iPhone 12 Pro Max 128GB Azul Pacífico",
    model: "iPhone 12 Pro Max",
    condition: "seminovo",
    price: 2000.00,
    installments: 12,
    storage: "128GB",
    color: "Azul Pacífico",
    colorHex: "#2C3E4E",
    category: "iphone",
    images: ["assets/images/iphone12promax-azulpacifico.webp", "assets/images/12promax2.webp", "assets/images/12promax3.webp", "assets/images/iphocell.png"], 
    inStock: true,
    isNew: false,
    description: "A maior tela e o melhor conjunto de lentes Pro da linha 12. O iPhone 12 Pro Max traz estabilização óptica por deslocamento de sensor e tela gigante de 6,7 polegadas.",
    specs: {
      chip: "A14 Bionic",
      camera: "Tripla 12MP com Sensor-Shift OIS, Zoom óptico de 5x e scanner LiDAR",
      battery: "Até 20 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,7 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-12-promax-256-azul",
    name: "iPhone 12 Pro Max 256GB Azul Pacífico",
    model: "iPhone 12 Pro Max",
    condition: "seminovo",
    price: 2200.00,
    installments: 12,
    storage: "256GB",
    color: "Azul Pacífico",
    colorHex: "#2C3E4E",
    category: "iphone",
    images: ["assets/images/iphone12promax-azulpacifico.webp", "assets/images/12promax2.webp", "assets/images/12promax3.webp", "assets/images/iphocell.png"], 
    inStock: true,
    isNew: false,
    description: "A maior tela e o melhor conjunto de lentes Pro da linha 12. O iPhone 12 Pro Max traz estabilização óptica por deslocamento de sensor e tela gigante de 6,7 polegadas.",
    specs: {
      chip: "A14 Bionic",
      camera: "Tripla 12MP com Sensor-Shift OIS, Zoom óptico de 5x e scanner LiDAR",
      battery: "Até 20 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,7 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-13-128-estelar",
    name: "iPhone 13 128GB Estelar",
    model: "iPhone 13",
    condition: "seminovo",
    price: 2100.00,
    installments: 12,
    storage: "128GB",
    color: "Estelar",
    colorHex: "#FAF5EF",
    category: "iphone",
    images: ["assets/images/iphone13-estelar.webp", "assets/images/iphone13-estelar2.webp", "assets/images/iphone13-estelar3.webp", "assets/images/iphone13-estelar4.webp"],
    inStock: true,
    isNew: false,
    description: "O iPhone 13 traz o sensor de câmera na diagonal com a estabilização por deslocamento de sensor da linha Pro Max, chip A15 Bionic super rápido e ótima autonomia.",
    specs: {
      chip: "A15 Bionic",
      camera: "Dupla 12MP (Grande-angular e Ultra-angular) com Estilos Fotográficos e Modo Cinema",
      battery: "Até 19 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-13-256-estelar",
    name: "iPhone 13 256GB Estelar",
    model: "iPhone 13",
    condition: "seminovo",
    price: 2300.00,
    installments: 12,
    storage: "256GB",
    color: "Estelar",
    colorHex: "#FAF5EF",
    category: "iphone",
    images: ["assets/images/iphone13-estelar.webp", "assets/images/iphone13-estelar2.webp", "assets/images/iphone13-estelar3.webp", "assets/images/iphone13-estelar4.webp"],
    inStock: true,
    isNew: false,
    description: "O iPhone 13 traz o sensor de câmera na diagonal com a estabilização por deslocamento de sensor da linha Pro Max, chip A15 Bionic super rápido e ótima autonomia.",
    specs: {
      chip: "A15 Bionic",
      camera: "Dupla 12MP (Grande-angular e Ultra-angular) com Estilos Fotográficos e Modo Cinema",
      battery: "Até 19 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-13-pro-128-azul",
    name: "iPhone 13 Pro 128GB Azul Sierra",
    model: "iPhone 13 Pro",
    condition: "seminovo",
    price: 2600.00,
    installments: 12,
    storage: "128GB",
    color: "Azul Sierra",
    colorHex: "#9DB2C3",
    category: "iphone",
    images: ["assets/images/13pro-azsierra.webp", "assets/images/13pro-azsierra2.webp", "assets/images/13pro-azsierra3.webp", "assets/images/13pro-azsierra4.webp"],
    inStock: true,
    isNew: false,
    description: "A linha 13 Pro introduz a tela Super Retina XDR com ProMotion (120Hz) para fluidez absoluta, lentes Pro maiores para fotos macro e chip A15 com GPU de 5 núcleos.",
    specs: {
      chip: "A15 Bionic com GPU de 5 núcleos",
      camera: "Tripla 12MP Pro com Modo Cinematico, Modo Macro e Prores",
      battery: "Até 22 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR com ProMotion (120Hz) de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-13-pro-256-azul",
    name: "iPhone 13 Pro 256GB Azul Sierra",
    model: "iPhone 13 Pro",
    condition: "seminovo",
    price: 2800.00,
    installments: 12,
    storage: "256GB",
    color: "Azul Sierra",
    colorHex: "#9DB2C3",
    category: "iphone",
    images: ["assets/images/13pro-azsierra.webp", "assets/images/13pro-azsierra2.webp", "assets/images/13pro-azsierra3.webp", "assets/images/13pro-azsierra4.webp"],
    inStock: true,
    isNew: false,
    description: "A linha 13 Pro introduz a tela Super Retina XDR com ProMotion (120Hz) para fluidez absoluta, lentes Pro maiores para fotos macro e chip A15 com GPU de 5 núcleos.",
    specs: {
      chip: "A15 Bionic com GPU de 5 núcleos",
      camera: "Tripla 12MP Pro com Modo Cinematico, Modo Macro e Prores",
      battery: "Até 22 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR com ProMotion (120Hz) de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-13-promax-128-grafite",
    name: "iPhone 13 Pro Max 128GB Grafite",
    model: "iPhone 13 Pro Max",
    condition: "seminovo",
    price: 2700.00,
    installments: 12,
    storage: "128GB",
    color: "Grafite",
    colorHex: "#5C5D5F",
    category: "iphone",
    images: ["assets/images/13pm-grafite.webp", "assets/images/13pm-grafite2.webp", "assets/images/13pm-grafite3.webp", "assets/images/13pm-grafite4.webp"],
    inStock: true,
    isNew: false,
    description: "O campeão histórico em autonomia de bateria. O iPhone 13 Pro Max possui tela de 6,7 polegadas a 120Hz, câmeras de alta captação de luz e estrutura ultra resistente.",
    specs: {
      chip: "A15 Bionic com GPU de 5 núcleos",
      camera: "Tripla Pro 12MP com lentes Grande-angular, Ultra-angular, Teleobjetiva (3x) e LiDAR",
      battery: "Até 28 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR com ProMotion (120Hz) de 6,7 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-13-promax-256-grafite",
    name: "iPhone 13 Pro Max 256GB Grafite",
    model: "iPhone 13 Pro Max",
    condition: "seminovo",
    price: 2900.00,
    installments: 12,
    storage: "256GB",
    color: "Grafite",
    colorHex: "#5C5D5F",
    category: "iphone",
    images: ["assets/images/13pm-grafite.webp", "assets/images/13pm-grafite2.webp", "assets/images/13pm-grafite3.webp", "assets/images/13pm-grafite4.webp"],
    inStock: true,
    isNew: false,
    description: "O campeão histórico em autonomia de bateria. O iPhone 13 Pro Max possui tela de 6,7 polegadas a 120Hz, câmeras de alta captação de luz e estrutura ultra resistente.",
    specs: {
      chip: "A15 Bionic com GPU de 5 núcleos",
      camera: "Tripla Pro 12MP com lentes Grande-angular, Ultra-angular, Teleobjetiva (3x) e LiDAR",
      battery: "Até 28 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR com ProMotion (120Hz) de 6,7 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-14-128-azul",
    name: "iPhone 14 128GB Azul",
    model: "iPhone 14",
    condition: "seminovo",
    price: 2400.00,
    installments: 12,
    storage: "128GB",
    color: "Azul",
    colorHex: "#A9C0D3",
    category: "iphone",
    images: ["assets/images/iphone14-azul.webp", "assets/images/iphone14-azul2.webp", "assets/images/iphone14-azul3.webp", "assets/images/iphone14-azul4.webp"],
    inStock: true,
    isNew: false,
    description: "iPhone 14 com o sistema de câmera dupla mais impressionante e o novo recurso de estabilização do Modo Ação. Além de contar com a inovadora Detecção de Acidentes.",
    specs: {
      chip: "A15 Bionic com GPU de 5 núcleos",
      camera: "Dupla 12MP com Photonic Engine, Modo Ação e Estabilização Aprimorada",
      battery: "Até 20 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-14-256-azul",
    name: "iPhone 14 256GB Azul",
    model: "iPhone 14",
    condition: "seminovo",
    price: 2600.00,
    installments: 12,
    storage: "256GB",
    color: "Azul",
    colorHex: "#A9C0D3",
    category: "iphone",
    images: ["assets/images/iphone14-azul.webp", "assets/images/iphone14-azul2.webp", "assets/images/iphone14-azul3.webp", "assets/images/iphone14-azul4.webp"],
    inStock: true,
    isNew: false,
    description: "iPhone 14 com o sistema de câmera dupla mais impressionante e o novo recurso de estabilização do Modo Ação. Além de contar com a inovadora Detecção de Acidentes.",
    specs: {
      chip: "A15 Bionic com GPU de 5 núcleos",
      camera: "Dupla 12MP com Photonic Engine, Modo Ação e Estabilização Aprimorada",
      battery: "Até 20 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-14-plus-128-estelar",
    name: "iPhone 14 Plus 128GB Estelar",
    model: "iPhone 14 Plus",
    condition: "seminovo",
    price: 2600.00,
    installments: 12,
    storage: "128GB",
    color: "Estelar",
    colorHex: "#FAF5EF",
    category: "iphone",
    images: ["assets/images/iphone14plus.webp", "assets/images/iphone14plus2.webp", "assets/images/iphone14plus3.webp", "assets/images/iphone14plus4.webp"],
    inStock: true,
    isNew: false,
    description: "O modelo Plus combina a tela gigante de 6,7 polegadas da Apple com o peso reduzido e uma bateria de longa duração espetacular, perfeito para consumo de mídia.",
    specs: {
      chip: "A15 Bionic com GPU de 5 núcleos",
      camera: "Dupla 12MP com Photonic Engine, Modo Ação e estabilização profissional",
      battery: "Até 26 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,7 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-14-plus-256-estelar",
    name: "iPhone 14 Plus 256GB Estelar",
    model: "iPhone 14 Plus",
    condition: "seminovo",
    price: 2800.00,
    installments: 12,
    storage: "256GB",
    color: "Estelar",
    colorHex: "#FAF5EF",
    category: "iphone",
    images: ["assets/images/iphone14plus.webp", "assets/images/iphone14plus2.webp", "assets/images/iphone14plus3.webp", "assets/images/iphone14plus4.webp"],
    inStock: true,
    isNew: false,
    description: "O modelo Plus combina a tela gigante de 6,7 polegadas da Apple com o peso reduzido e uma bateria de longa duração espetacular, perfeito para consumo de mídia.",
    specs: {
      chip: "A15 Bionic com GPU de 5 núcleos",
      camera: "Dupla 12MP com Photonic Engine, Modo Ação e estabilização profissional",
      battery: "Até 26 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,7 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-14-promax-128-roxo",
    name: "iPhone 14 Pro Max 128GB Roxo Profundo",
    model: "iPhone 14 Pro Max",
    condition: "seminovo",
    price: 3800.00,
    installments: 12,
    storage: "128GB",
    color: "Roxo Profundo",
    colorHex: "#5B5162",
    category: "iphone",
    images: ["assets/images/iphone14promax-roxo.webp", "assets/images/14pm-roxo2.webp", "assets/images/14pm-roxo3.webp", "assets/images/14pm-roxo4.webp"],
    inStock: true,
    isNew: false,
    description: "O topo de linha da geração 14. O iPhone 14 Pro Max apresenta a Dynamic Island, tela Sempre Ativa de 6,7 polegadas e uma extraordinária câmera principal Pro de 48 megapixels.",
    specs: {
      chip: "A16 Bionic",
      camera: "Tripla Pro: Principal de 48MP, Ultra-angular de 12MP e Teleobjetiva de 12MP",
      battery: "Até 29 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR Sempre Ativa (120Hz) de 6,7 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-14-promax-256-preto",
    name: "iPhone 14 Pro Max 256GB Preto Espacial",
    model: "iPhone 14 Pro Max",
    condition: "seminovo",
    price: 3900.00,
    installments: 12,
    storage: "256GB",
    color: "Preto Espacial",
    colorHex: "#1C1D21",
    category: "iphone",
    images: ["assets/images/iphone14promax-pretoespacial.webp", "assets/images/14pm-preto2.webp", "assets/images/14pm-preto3.webp", "assets/images/14pm-preto4.webp"],
    inStock: true,
    isNew: false,
    description: "Espaço de armazenamento de 256GB para guardar tudo. O iPhone 14 Pro Max em Preto Espacial destaca a estética industrial premium em aço cirúrgico da Apple.",
    specs: {
      chip: "A16 Bionic",
      camera: "Tripla Pro: Principal de 48MP com sensor quad-pixel, Ultra-angular e Teleobjetiva",
      battery: "Até 29 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR Sempre Ativa (120Hz) de 6,7 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-14-promax-512-preto",
    name: "iPhone 14 Pro Max 512GB Preto Espacial",
    model: "iPhone 14 Pro Max",
    condition: "seminovo",
    price: 4200.00,
    installments: 12,
    storage: "512GB",
    color: "Preto Espacial",
    colorHex: "#1C1D21",
    category: "iphone",
    images: ["assets/images/iphone14promax-pretoespacial.webp", "assets/images/14pm-preto2.webp", "assets/images/14pm-preto3.webp", "assets/images/14pm-preto4.webp"],
    inStock: true,
    isNew: false,
    description: "Espaço de armazenamento de 512GB para guardar tudo. O iPhone 14 Pro Max em Preto Espacial destaca a estética industrial premium em aço cirúrgico da Apple.",
    specs: {
      chip: "A16 Bionic",
      camera: "Tripla Pro: Principal de 48MP com sensor quad-pixel, Ultra-angular e Teleobjetiva",
      battery: "Até 29 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR Sempre Ativa (120Hz) de 6,7 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-15-128-lacrado-preto",
    name: "iPhone 15 128GB Preto (Lacrado)",
    model: "iPhone 15",
    condition: "lacrado",
    price: 2900.00,
    installments: 12,
    storage: "128GB",
    color: "Preto",
    colorHex: "#222222",
    category: "iphone",
    images: ["assets/images/iphone15-preto.webp", "assets/images/iphone15-preto2.webp", "assets/images/iphone15-preto3.webp", "assets/images/iphone15-4.webp"], 
    inStock: true,
    isNew: false,
    description: "iPhone 15 seminovo em excelente estado. Conta com a Dynamic Island, câmera principal de 48MP para retratos automáticos refinados e o conector USB-C universal.",
    specs: {
      chip: "A16 Bionic",
      camera: "Dupla: Fusão de 48MP e Ultra-angular de 12MP com zoom digital e óptico de 2x",
      battery: "Até 20 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas com Dynamic Island",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-15-128-lacrado-azul",
    name: "iPhone 15 128GB Azul (Lacrado)",
    model: "iPhone 15",
    condition: "lacrado",
    price: 4000.00,
    installments: 12,
    storage: "128GB",
    color: "Azul",
    colorHex: "#DCE5EA",
    category: "iphone",
    images: ["assets/images/iphone15-azul.webp", "assets/images/iphone15-azul2.webp", "assets/images/iphone15-azul3.webp", "assets/images/iphone15-4.webp"],
    inStock: true,
    isNew: true,
    description: "iPhone 15 novo de fábrica, lacrado na caixa com 1 ano de garantia Apple. Estrutura em vidro colorido por infusão, bordas chanfradas e conector USB-C.",
    specs: {
      chip: "A16 Bionic",
      camera: "Dupla: Fusão de 48MP para detalhes surreais e Ultra-angular de 12MP",
      battery: "Até 20 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas com Dynamic Island",
      os: "iOS 18"
    }
  },
  {
    id: "iphone-15-pro-128-titanio",
    name: "iPhone 15 Pro 128GB Titânio Natural",
    model: "iPhone 15 Pro",
    condition: "lacrado",
    price: 3800.00,
    installments: 12,
    storage: "128GB",
    color: "Titânio Natural",
    colorHex: "#A09E99",
    category: "iphone",
    images: ["assets/images/iphone15promaxtitanio-natural.webp", "assets/images/15pro-tin2.webp", "assets/images/15pro-tin3.webp", "assets/images/15pro-tin4.webp"],
    inStock: true,
    isNew: false,
    description: "O iPhone 15 Pro apresenta estrutura robusta em titânio aeroespacial, chip A17 Pro (ótimo para jogos AAA), botão de Ação customizável e USB-C com velocidade USB 3.",
    specs: {
      chip: "A17 Pro",
      camera: "Tripla Pro: Principal de 48MP, Ultra-angular de 12MP e Teleobjetiva de 12MP (Zoom 3x)",
      battery: "Até 23 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR Sempre Ativa (120Hz) de 6,1 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-15-promax-128-titanio-preto",
    name: "iPhone 15 Pro Max 128GB Titânio Preto",
    model: "iPhone 15 Pro Max",
    condition: "seminovo",
    price: 4400.00,
    installments: 12,
    storage: "128GB",
    color: "Titânio Preto",
    colorHex: "#303032",
    category: "iphone",
    images: ["assets/images/iphone15promaxtitanio-preto.webp", "assets/images/15pro-tip2.webp", "assets/images/15pro-tip3.webp", "assets/images/15pro-tip4.webp"],
    inStock: true,
    isNew: false,
    description: "iPhone 15 Pro Max em titânio escuro. Une a leveza do titânio com a tela gigante de 6,7 polegadas ProMotion e a lente teleobjetiva de 5x (design tetraprisma).",
    specs: {
      chip: "A17 Pro",
      camera: "Tripla Pro: Principal de 48MP, Ultra-angular e Teleobjetiva com Zoom óptico de 5x",
      battery: "Até 29 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR Sempre Ativa (120Hz) de 6,7 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-15-promax-256-titanio-natural",
    name: "iPhone 15 Pro Max 256GB Titânio Natural",
    model: "iPhone 15 Pro Max",
    condition: "seminovo",
    price: 4500.00,
    installments: 12,
    storage: "256GB",
    color: "Titânio Natural",
    colorHex: "#A09E99",
    category: "iphone",
    images: ["assets/images/iphone15promaxtitanio-natural.webp", "assets/images/15pro-tin2.webp", "assets/images/15pro-tin3.webp", "assets/images/15pro-tin4.webp"],
    inStock: true,
    isNew: false,
    description: "Versão de 256GB do aclamado iPhone 15 Pro Max na cor Titânio Natural. Máxima performance em gravação ProRES, fotos ProRAW de 48MP e bateria imbatível.",
    specs: {
      chip: "A17 Pro",
      camera: "Tripla Pro: Principal de 48MP, Ultra-angular de 12MP e Zoom Óptico de 5x com estabilização 3D",
      battery: "Até 29 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR Sempre Ativa (120Hz) de 6,7 polegadas",
      os: "iOS 18 compatível"
    }
  },
  {
    id: "iphone-16-128-lacrado-preto",
    name: "iPhone 16 128GB Preto (Lacrado)",
    model: "iPhone 16",
    condition: "lacrado",
    price: 3850.00,
    installments: 12,
    storage: "128GB",
    color: "Preto",
    colorHex: "#0F1012",
    category: "iphone",
    images: ["assets/images/iphone16-preto.webp", "assets/images/16preto2.webp", "assets/images/16preto3.webp", "assets/images/16-4.webp"],
    inStock: true,
    isNew: false,
    description: "O mais novo modelo da Apple na versão lacrado. Conta com o chip A18 de alto rendimento, o novo Controle da Câmera tátil e suporte nativo ao Apple Intelligence.",
    specs: {
      chip: "A18",
      camera: "Fusão de 48MP e Ultra-angular de 12MP com foco macro e Controle da Câmera",
      battery: "Até 22 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas com Dynamic Island",
      os: "iOS 18"
    }
  },
  {
    id: "iphone-16-128-lacrado-ultramarinho",
    name: "iPhone 16 128GB Ultramarinho (Lacrado)",
    model: "iPhone 16",
    condition: "lacrado",
    price: 4800.00,
    installments: 12,
    storage: "128GB",
    color: "Ultramarinho",
    colorHex: "#3A559F",
    category: "iphone",
    images: ["assets/images/iphone16-ultra.webp", "assets/images/16um2.webp", "assets/images/16um3.webp", "assets/images/16-4.webp"],
    inStock: true,
    isNew: true,
    description: "iPhone 16 lacrado de fábrica na deslumbrante cor azul Ultramarinho. Equipado com chip A18, botão de Ação, Controle da Câmera e 1 ano de garantia Apple.",
    specs: {
      chip: "A18",
      camera: "Fusão de 48MP e Ultra-angular de 12MP com revestimento antirreflexo e Controle da Câmera",
      battery: "Até 22 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR de 6,1 polegadas com Dynamic Island",
      os: "iOS 18"
    }
  },
  {
    id: "iphone-16-pro-128-titanio-deserto",
    name: "iPhone 16 Pro 128GB Titânio Deserto",
    model: "iPhone 16 Pro",
    condition: "novo",
    price: 4800.00,
    installments: 12,
    storage: "128GB",
    color: "Titânio Deserto",
    colorHex: "#C7B8A1",
    category: "iphone",
    images: ["assets/images/16protitaniodeserto.webp", "assets/images/16pm-tid2.webp", "assets/images/16pm-tid3.webp", "assets/images/16pm-4.webp"],
    inStock: true,
    isNew: true,
    description: "O novo iPhone 16 Pro em Titânio Deserto. Conta com a tela ProMotion maior de 6,3 polegadas com bordas ultrafinas, chip A18 Pro de 3nm e câmera ultra-angular de 48MP.",
    specs: {
      chip: "A18 Pro",
      camera: "Tripla Pro: Fusão de 48MP, Ultra-angular de 48MP e Zoom óptico 5x de 12MP",
      battery: "Até 27 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR Sempre Ativa (120Hz) de 6,3 polegadas",
      os: "iOS 18"
    }
  },
  {
    id: "iphone-16-promax-256-titanio-natural",
    name: "iPhone 16 Pro Max 256GB Titânio Natural",
    model: "iPhone 16 Pro Max",
    condition: "novo",
    price: 5200.00,
    installments: 12,
    storage: "256GB",
    color: "Titânio Natural",
    colorHex: "#A09E99",
    category: "iphone",
    images: ["assets/images/16pm-tin.webp", "assets/images/16pm-tin2.webp", "assets/images/16pm-tin3.webp", "assets/images/16pm-4.webp"],
    inStock: true,
    isNew: true,
    description: "O ápice do design e desempenho mobile da Apple. O iPhone 16 Pro Max traz tela expansiva de 6,9 polegadas, áudio com qualidade de estúdio e chip A18 Pro.",
    specs: {
      chip: "A18 Pro",
      camera: "Tripla Pro: Fusão 48MP, Ultra-angular 48MP e Teleobjetiva 5x de 12MP com gravação 4K Dolby Vision 120fps",
      battery: "Até 33 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR Sempre Ativa (120Hz) de 6,9 polegadas com bordas microscópicas",
      os: "iOS 18"
    }
  },
  {
    id: "iphone-17-128-novo-verde",
    name: "iPhone 17 128GB Verde Metálico",
    model: "iPhone 17",
    condition: "lacrado",
    price: 5500.00,
    installments: 12,
    storage: "128GB",
    color: "Verde Metálico",
    colorHex: "#4E6D5F",
    category: "iphone",
    images: ["assets/images/iphone17-verde.webp", "assets/images/17verde2.webp", "assets/images/17verde3.webp", "assets/images/17verde4.webp"],
    inStock: true,
    isNew: true,
    description: "Seja um dos primeiros a adquirir a futura geração! O iPhone 17 traz o chip A19, tela ProMotion inteligente para todos os modelos e câmera aprimorada por inteligência avançada.",
    specs: {
      chip: "A19 Bionic",
      camera: "Dupla Fusão 48MP com processamento avançado e Controle da Câmera de 2ª geração",
      battery: "Até 24 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR ProMotion (120Hz) de 6,3 polegadas",
      os: "iOS 19 compatível"
    }
  },
  {
    id: "iphone-17-pro-256-novo-prateado",
    name: "iPhone 17 Pro 256GB Prateado",
    model: "iPhone 17 Pro",
    condition: "lacrado",
    price: 7700.00,
    installments: 12,
    storage: "256GB",
    color: "Prateado",
    colorHex: "#C0C0C0",
    category: "iphone",
    images: ["assets/images/iphone17pro-prata.webp", "assets/images/17pro-prata2.webp", "assets/images/17pro-prata3.webp", "assets/images/17pro-prata4.webp"],
    inStock: true,
    isNew: true,
    description: "O futuro topo de linha profissional. iPhone 17 Pro com chip A19 Pro de 2nm, três lentes traseiras de 48 megapixels de altíssima definição e design em titânio texturizado.",
    specs: {
      chip: "A19 Pro",
      camera: "Tripla 48MP (Fusão, Ultra-angular e Teleobjetiva Pro) com estabilização óptica mecânica",
      battery: "Até 30 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR Sempre Ativa (120Hz) de 6,3 polegadas",
      os: "iOS 19"
    }
  },
  {
    id: "iphone-17-promax-256-novo-laranja-cosmico",
    name: "iPhone 17 Pro Max 256GB Laranja-cósmico",
    model: "iPhone 17 Pro Max",
    condition: "lacrado",
    price: 8500.00,
    installments: 12,
    storage: "256GB",
    color: "Laranja-cósmico",
    colorHex: "#D46E30",
    category: "iphone",
    images: ["assets/images/iphone17promax-laranja.webp", "assets/images/17pro-la2.webp", "assets/images/17pro-la3.webp", "assets/images/17pro-la4.webp"],
    inStock: true,
    isNew: true,
    description: "O maior, mais luxuoso e potente iPhone do futuro. O iPhone 17 Pro Max conta com tela de 6,9 polegadas, bateria revolucionária de alta densidade e zoom óptico de 10x.",
    specs: {
      chip: "A19 Pro (2nm)",
      camera: "Tripla Pro 48MP com Lente Periscópica de 10x de zoom óptico e lente frontal de 24MP",
      battery: "Até 36 horas de reprodução de vídeo",
      screen: "OLED Super Retina XDR ProMotion Sempre Ativa de 6,9 polegadas",
      os: "iOS 19"
    }
  },
  {
    id: "ipad-pro-11-128-cinza",
    name: "iPad Pro 11\" 128GB Wi-Fi Cinza Espacial",
    model: "iPad",
    condition: "seminovo",
    price: 2750.00,
    installments: 12,
    storage: "128GB",
    color: "Prata",
    colorHex: "#4E5052",
    category: "ipad",
    images: ["assets/images/ipad11-cinza.webp", "assets/images/ipad11-2.webp", "assets/images/ipad11-3.webp", "assets/images/ipad11-4.webp"],
    inStock: true,
    isNew: false,
    description: "Desempenho assombroso com a tela Liquid Retina de 11 polegadas de 120Hz, chip poderoso para tarefas pesadas, compatibilidade com Apple Pencil e teclado Magic Keyboard.",
    specs: {
      chip: "M1 Apple Silicon",
      camera: "Principal 12MP + Ultra-angular 10MP com Scanner LiDAR de alta precisão",
      battery: "Até 10 horas de navegação na internet via Wi-Fi",
      screen: "Liquid Retina de 11 polegadas com ProMotion (120Hz) e True Tone",
      os: "iPadOS 18 compatível"
    }
  },
  {
    id: "ipad-pro-11-128-rosa",
    name: "iPad Pro 11\" 128GB Wi-Fi Rosa",
    model: "iPad",
    condition: "seminovo",
    price: 2750.00,
    installments: 12,
    storage: "128GB",
    color: "Rosa",
    colorHex: "#F4B3C2",
    category: "ipad",
    images: ["assets/images/ipad11-rosa.webp", "assets/images/ipad11-2.webp", "assets/images/ipad11-3.webp", "assets/images/ipad11-4.webp"],
    inStock: true,
    isNew: false,
    description: "Desempenho assombroso com a tela Liquid Retina de 11 polegadas de 120Hz, chip poderoso para tarefas pesadas, compatibilidade com Apple Pencil e teclado Magic Keyboard.",
    specs: {
      chip: "M1 Apple Silicon",
      camera: "Principal 12MP + Ultra-angular 10MP com Scanner LiDAR de alta precisão",
      battery: "Até 10 horas de navegação na internet via Wi-Fi",
      screen: "Liquid Retina de 11 polegadas com ProMotion (120Hz) e True Tone",
      os: "iPadOS 18 compatível"
    }
  },
  {
    id: "apple-watch-s9-novo",
    name: "Apple Watch Series 9 GPS 45mm",
    model: "Apple Watch",
    condition: "novo",
    price: 2199.00,
    installments: 12,
    storage: "64GB",
    color: "Meia-noite",
    colorHex: "#1E2328",
    category: "apple watch",
    images: ["assets/images/smartwatchs9.webp", "assets/images/smartwatchs92.webp", "assets/images/smartwatchs93.webp", "assets/images/smartwatchs94.webp"],
    inStock: true,
    isNew: true,
    description: "Mais inteligente, brilhante e poderoso. O chip S9 SiP torna a tela super brilhante e permite uma nova forma mágica de interagir sem tocar na tela.",
    specs: {
      chip: "S9 SiP",
      camera: "Não disponível",
      battery: "Até 18 horas de uso normal (modo de pouca energia até 36h)",
      screen: "Retina Sempre Ativa OLED LTPO (até 2000 nits)",
      os: "watchOS 11 compatível"
    }
  },
  {
    id: "capinha-transparente",
    name: "Capinha Transparente MagSafe",
    model: "Acessórios",
    condition: "novo",
    price: 35.00,
    installments: 3,
    storage: "N/A",
    color: "Transparente",
    colorHex: "#FFFFFF",
    category: "acessorios",
    images: ["assets/images/capinhaiphone15-transparente.webp", "assets/images/capinha15-transpa2.webp", "assets/images/capinha15-transpa3.webp", "assets/images/capinha15-transpa4.webp"],
    inStock: true,
    isNew: false,
    description: "Fina, leve e fácil de segurar, esta capa protege o iPhone sem esconder o brilho das cores. Possui ímãs integrados para encaixe perfeito do MagSafe.",
    specs: {
      chip: "N/A",
      camera: "N/A",
      battery: "N/A",
      screen: "N/A",
      os: "iPhone XR ao 16"
    }
  },
  {
    id: "cabo-usbc-apple",
    name: "Cabo USB-C de Recarga Apple (1m)",
    model: "Acessórios",
    condition: "novo",
    price: 45.00,
    installments: 6,
    storage: "N/A",
    color: "Branco",
    colorHex: "#FFFFFF",
    category: "acessorios",
    images: ["assets/images/cabo-usb.webp", "assets/images/cabo-usb2.webp"],
    inStock: true, 
    isNew: true,
    description: "Cabo de recarga com conectores USB-C em ambas as pontas. Ideal para carregar, sincronizar e transferir dados entre dispositivos USB-C com velocidade e segurança.",
    specs: {
      chip: "N/A",
      camera: "N/A",
      battery: "N/A",
      screen: "N/A",
      os: "Conexão USB-C"
    }
  },
  {
    id: "carregador-20w-apple",
    name: "Carregador iPhone, iPad, Apple Watch e AirPods Apple USB-C – 20W",
    model: "Acessórios",
    condition: "novo",
    price: 199.00,
    installments: 6,
    storage: "N/A",
    color: "Branco",
    colorHex: "#FFFFFF",
    category: "acessorios",
    images: ["assets/images/fonte.webp", "assets/images/fonte2.webp", "assets/images/fonte3.webp","assets/images/iphocell.png"],
    inStock: true,  
    isNew: true,
    description: "O adaptador de energia Apple USB-C de 20W oferece recarga rápida e eficiente. Ideal para usar em casa, no trabalho ou onde você estiver. Compatível com qualquer dispositivo com porta USB-C.",
    specs: {
      chip: "N/A",
      camera: "N/A",
      battery: "N/A",
      screen: "N/A",
      os: "Conexão USB-C"
    }
  },
  {
    id: "cabo-usbc-lightning-apple",
    name: "Cabo USB-C para Lightning (1m)",
    model: "Acessórios",
    condition: "novo",
    price: 45.00,
    installments: 4,
    storage: "N/A",
    color: "Branco",
    colorHex: "#FFFFFF",
    category: "acessorios",
    images: ["assets/images/cabousb-lightin.webp", "assets/images/usb-lightin2.webp", "assets/images/usb-lightin3.webp", "assets/images/usb-lightin4.webp"],
    inStock: true,
    isNew: true,
    description: "Conecte seu iPhone, iPad ou iPod com conector Lightning ao USB-C do seu Mac ou carregador para recarregar e sincronizar de forma rápida e segura.",
    specs: {
      chip: "N/A",
      camera: "N/A",
      battery: "N/A",
      screen: "N/A",
      os: "Comprimento de 1 metro"
    }
  },
  {
    id: "carregador-magsafe-apple",
    name: "Carregador MagSafe Apple",
    model: "Acessórios",
    condition: "novo",
    price: 250.00,
    installments: 12,
    storage: "N/A",
    color: "Prata/Branco",
    colorHex: "#E5E5E5",
    category: "acessorios",
    images: ["assets/images/magsafe.webp", "assets/images/magsafe2.webp", "assets/images/magsafe3.webp", "assets/images/magsafe4.webp"],
    inStock: true,
    isNew: true,
    description: "O carregador MagSafe recarrega seu aparelho num piscar de olhos. Os ímãs se alinham perfeitamente ao seu iPhone para recarga sem fio rápida de até 15W com total segurança.",
    specs: {
      chip: "N/A",
      camera: "N/A",
      battery: "N/A",
      screen: "N/A",
      os: "Tecnologia de Indução MagSafe"
    }
  },
  {
    id: "capa-silicone-preta",
    name: "Capa de Silicone",
    model: "Capa de Silicone",
    condition: "novo",
    price: 20.00,
    installments: 6,
    storage: "N/A",
    color: "Preta",
    colorHex: "#1C1D21",
    category: "acessorios",
    images: ["assets/images/capinha16promax-magsafe.webp"], 
    inStock: true,
    isNew: true,
    description: "Criada pela Apple, a capa de silicone oferece toque sedoso e proteção robusta contra quedas, com suporte total ao MagSafe.",
    specs: {
      chip: "N/A",
      camera: "N/A",
      battery: "N/A",
      screen: "N/A",
      os: "iPhone XR ao 16"
    }
  },
  {
    id: "pelicula-vidro-3d-premium",
    name: "Película de Vidro 3D Premium",
    model: "Acessórios",
    condition: "novo",
    price: 15.00,
    installments: 3,
    storage: "N/A",
    color: "Transparente",
    colorHex: "#FFFFFF",
    category: "acessorios",
    images: ["assets/images/pelicula3d.webp", "assets/images/iphocell.png", "assets/images/iphocell.png", "assets/images/iphocell.png"],
    inStock: true,
    isNew: true,
    description: "Película protetora de vidro temperado 3D de cobertura total. Altíssima sensibilidade ao toque, ultra transparente e resistente contra riscos e impactos severos.",
    specs: {
      chip: "N/A",
      camera: "N/A",
      battery: "N/A",
      screen: "N/A",
      os: "iPhone XR ao 16"
    }
  }
];

// Variantes de armazenamento adicionais oficiais a serem injetadas dinamicamente
const extraStorages = [
  // iPhone 12
  { model: "iPhone 12", storage: "64GB", price: 1400.00, baseStorage: "128GB" },
  { model: "iPhone 12", storage: "256GB", price: 1800.00, baseStorage: "128GB" },
  // iPhone 12 Pro
  { model: "iPhone 12 Pro", storage: "256GB", price: 2100.00, baseStorage: "128GB" },
  // iPhone 12 Pro Max
  { model: "iPhone 12 Pro Max", storage: "128GB", price: 2000.00, baseStorage: "256GB" },
  // iPhone 13
  { model: "iPhone 13", storage: "256GB", price: 2300.00, baseStorage: "128GB" },
  // iPhone 13 Pro
  { model: "iPhone 13 Pro", storage: "256GB", price: 2800.00, baseStorage: "128GB" },
  // iPhone 13 Pro Max
  { model: "iPhone 13 Pro Max", storage: "128GB", price: 2700.00, baseStorage: "256GB" },
  // iPhone 14
  { model: "iPhone 14", storage: "256GB", price: 2600.00, baseStorage: "128GB" },
  // iPhone 14 Plus
  { model: "iPhone 14 Plus", storage: "256GB", price: 2800.00, baseStorage: "128GB" },
  // iPhone 14 Pro Max
  { model: "iPhone 14 Pro Max", storage: "512GB", price: 4200.00, baseStorage: "128GB" },
  // iPhone 15
  { model: "iPhone 15", storage: "256GB", price: 3200.00, baseStorage: "128GB", condition: "seminovo" },
  { model: "iPhone 15", storage: "256GB", price: 4400.00, baseStorage: "128GB", condition: "lacrado" },
  // iPhone 15 Pro
  { model: "iPhone 15 Pro", storage: "256GB", price: 4100.00, baseStorage: "128GB" },
  { model: "iPhone 15 Pro", storage: "512GB", price: 4500.00, baseStorage: "128GB" },
  // iPhone 15 Pro Max
  { model: "iPhone 15 Pro Max", storage: "512GB", price: 4900.00, baseStorage: "256GB" },
  // iPhone 16
  { model: "iPhone 16", storage: "256GB", price: 4250.00, baseStorage: "128GB", condition: "seminovo" },
  { model: "iPhone 16", storage: "256GB", price: 5300.00, baseStorage: "128GB", condition: "lacrado" },
  // iPhone 16 Pro
  { model: "iPhone 16 Pro", storage: "256GB", price: 5200.00, baseStorage: "128GB" },
  { model: "iPhone 16 Pro", storage: "512GB", price: 5800.00, baseStorage: "128GB" },
  // iPhone 16 Pro Max
  { model: "iPhone 16 Pro Max", storage: "128GB", price: 4900.00, baseStorage: "256GB" },
  { model: "iPhone 16 Pro Max", storage: "512GB", price: 5800.00, baseStorage: "256GB" },
  // iPhone 17
  { model: "iPhone 17", storage: "256GB", price: 6000.00, baseStorage: "128GB" },
  // iPhone 17 Pro
  { model: "iPhone 17 Pro", storage: "128GB", price: 7200.00, baseStorage: "256GB" },
  { model: "iPhone 17 Pro", storage: "512GB", price: 8500.00, baseStorage: "256GB" },
  // iPhone 17 Pro Max
  { model: "iPhone 17 Pro Max", storage: "128GB", price: 8000.00, baseStorage: "256GB" },
  { model: "iPhone 17 Pro Max", storage: "512GB", price: 9500.00, baseStorage: "256GB" }
];

// Injetar dinamicamente os armazenamentos extras
extraStorages.forEach(rule => {
  const bases = products.filter(p => 
    p.model === rule.model && 
    p.storage === rule.baseStorage && 
    p.category === "iphone" &&
    (!rule.condition || p.condition === rule.condition)
  );

  bases.forEach(base => {
    const baseStorageClean = rule.baseStorage.replace('GB', '');
    const newStorageClean = rule.storage.replace('GB', '');
    const newId = base.id.replace(`-${baseStorageClean}-`, `-${newStorageClean}-`);
    
    const exists = products.some(p => p.id === newId);
    if (!exists) {
      const newProduct = {
        ...base,
        id: newId,
        name: base.name.replace(rule.baseStorage, rule.storage),
        price: rule.price,
        storage: rule.storage
      };
      products.push(newProduct);
    }
  });
});

// Variantes de cores adicionais oficiais a serem injetadas dinamicamente
const extraVariants = [
  // iPhone XR
  { model: "iPhone Xr", color: "Branco", colorHex: "#F0EFEA", images: ["assets/images/iphonexr-branco.webp", "assets/images/iphonexr-branco2.webp", "assets/images/iphonexr-branco3.webp", "assets/images/iphonexr-branco4.webp"] },
  { model: "iPhone Xr", color: "Vermelho", colorHex: "#BA0C2F", images: ["assets/images/iphonexr-vermelho.webp", "assets/images/iphonexr-vermelho2.webp", "assets/images/iphonexr-vermelho3.webp", "assets/images/iphonexr-vermelho4.webp"] },
  { model: "iPhone Xr", color: "Azul", colorHex: "#4C708C", inStock: false },
  { model: "iPhone Xr", color: "Coral", colorHex: "#FF6F61", inStock: false },
  { model: "iPhone Xr", color: "Amarelo", colorHex: "#FFE17D", inStock: false },
 
  // iPhone 11
  { model: "iPhone 11", color: "Preto", colorHex: "#1C1D21", images: ["assets/images/iphone11-preto.webp", "assets/images/iphone11-preto2.webp", "assets/images/iphone11-preto3.webp", "assets/images/iphone11-preto4.webp"] },
  { model: "iPhone 11", color: "Vermelho", colorHex: "#BA0C2F", images
: ["assets/images/iphone11-vermelho.webp", "assets/images/iphone11-vermelho2.webp", "assets/images/iphone11-vermelho3.webp", "assets/images/iphone11-vermelho4.webp"] },
  { model: "iPhone 11", color: "Verde", colorHex: "#ADE3C8", inStock: false },
  { model: "iPhone 11", color: "Roxo", colorHex: "#D1C4E9", inStock: false },
  { model: "iPhone 11", color: "Amarelo", colorHex: "#FFE17D", inStock: false },
 
  // iPhone 11 Pro Max 
  { model: "iPhone 11 Pro Max", color: "Dourado", colorHex: "#F5E1C3", images: ["assets/images/11promax-dourado.webp", "assets/images/11promax-dourado2.webp", "assets/images/11promax-dourado3.webp", "assets/images/11promax-dourado4.webp"] },
  { model: "iPhone 11 Pro Max", color: "Prateado", colorHex: "#DDDDDD", inStock: false },
  { model: "iPhone 11 Pro Max", color: "Verde da Meia-noite", colorHex: "#4F5D53", inStock: false },

  // iPhone 12
  { model: "iPhone 12", color: "Preto", colorHex: "#1C1D21", images: ["assets/images/12-preto.webp", "assets/images/12-preto2.webp", "assets/images/12-preto3.webp", "assets/images/12-preto4.webp"] }, 
  { model: "iPhone 12", color: "Branco", colorHex: "#F2F2F2", images: ["assets/images/12-branco.webp", "assets/images/12-branco2.webp", "assets/images/12-branco3.webp", "assets/images/12-branco4.webp"] },
  { model: "iPhone 12", color: "Verde", colorHex: "#DDF0DE", inStock: false },
  { model: "iPhone 12", color: "Roxo", colorHex: "#DDD4E8", inStock: false },
  { model: "iPhone 12", color: "Vermelho", colorHex: "#C8102E", inStock: false },

  // iPhone 12 Pro
  { model: "iPhone 12 Pro", color: "Prateado", colorHex: "#DDDDDD", inStock: false },
  { model: "iPhone 12 Pro", color: "Dourado", colorHex: "#F5E1C3", inStock: false },
  { model: "iPhone 12 Pro", color: "Azul Pacífico", colorHex: "#2C3E4E", inStock: false },

  // iPhone 12 Pro Max
  { model: "iPhone 12 Pro Max", color: "Grafite", colorHex: "#5C5D5F", images: ["assets/images/12promax-grafite.webp", "assets/images/12promax-grafite2.webp", "assets/images/12promax-grafite3.webp", "assets/images/iphocell.png"]
   },
  { model: "iPhone 12 Pro Max", color: "Prateado", colorHex: "#DDDDDD", inStock: false },
  { model: "iPhone 12 Pro Max", color: "Dourado", colorHex: "#F5E1C3", inStock: false },

  // iPhone 13
  { model: "iPhone 13", color: "Meia-noite", colorHex: "#1F2328", images: ["assets/images/13meianoite.webp", "assets/images/13meianoite2.webp", "assets/images/13meianoite3.webp", "assets/images/13meianoite4.webp"]  },
  { model: "iPhone 13", color: "Azul", colorHex: "#4C708C", images: ["assets/images/13azul.webp", "assets/images/13azul2.webp", "assets/images/13azul3.webp", "assets/images/13azul4.webp"] },
  { model: "iPhone 13", color: "Rosa", colorHex: "#FAE0DC", inStock: false },
  { model: "iPhone 13", color: "Verde", colorHex: "#2F4C38", inStock: false },
  { model: "iPhone 13", color: "Vermelho", colorHex: "#C8102E", inStock: false },

  // iPhone 13 Pro
  { model: "iPhone 13 Pro", color: "Grafite", colorHex: "#5C5D5F", images: ["assets/images/13pro-grafite.webp", "assets/images/13pro-grafite2.webp", "assets/images/13pro-grafite3.webp", "assets/images/13pro-grafite4.webp"] },
  { model: "iPhone 13 Pro", color: "Dourado", colorHex: "#F5E1C3", images: ["assets/images/13pro-dourado.webp", "assets/images/13pro-dourado2.webp", "assets/images/13pro-dourado3.webp", "assets/images/13pro-dourado4.webp"] },
  { model: "iPhone 13 Pro", color: "Prateado", colorHex: "#DDDDDD", images: ["assets/images/13pro-prata.webp", "assets/images/13pro-prata2.webp", "assets/images/13pro-prata3.webp", "assets/images/13pro-prata4.webp"] },
  { model: "iPhone 13 Pro", color: "Verde Alpino", colorHex: "#4E5E50", inStock: false },
 
  // iPhone 13 Pro Max
  { model: "iPhone 13 Pro Max", color: "Azul Sierra", colorHex: "#9DB2C3", images: ["assets/images/13pm-azul.webp", "assets/images/13pm-azul2.webp", "assets/images/13pm-azul3.webp", "assets/images/13pm-azul4.webp"] }, 
  { model: "iPhone 13 Pro Max", color: "Dourado", colorHex: "#F5E1C3", images: ["assets/images/13pm-dourado.webp", "assets/images/13pm-dourado2.webp", "assets/images/13pm-dourado3.webp", "assets/images/13pm-dourado4.webp"] },
  { model: "iPhone 13 Pro Max", color: "Prateado", colorHex: "#DDDDDD", images: ["assets/images/13pm-prata.webp", "assets/images/13pm-prata2.webp", "assets/images/13pm-prata3.webp", "assets/images/13pm-prata4.webp"] },  
  { model: "iPhone 13 Pro Max", color: "Verde Alpino", colorHex: "#4E5E50", inStock: false }, 

  // iPhone 14
  { model: "iPhone 14", color: "Meia-noite", colorHex: "#1F2328", images : ["assets/images/14-preto.webp", "assets/images/14-preto2.webp", "assets/images/14-preto3.webp", "assets/images/14-preto4.webp"] },
  { model: "iPhone 14", color: "Estelar", colorHex: "#FAF5EF", images : ["assets/images/14-branco.webp", "assets/images/14-branco2.webp", "assets/images/14-branco3.webp", "assets/images/14-branco4.webp"] },
  { model: "iPhone 14", color: "Roxo", colorHex: "#DDD4E8", inStock: false },
  { model: "iPhone 14", color: "Amarelo", colorHex: "#FDF19B", inStock: false },
  { model: "iPhone 14", color: "Vermelho", colorHex: "#C8102E", inStock: false },

  // iPhone 14 Plus
  { model: "iPhone 14 Plus", color: "Meia-noite", colorHex: "#1F2328", images : ["assets/images/14plus-preto.webp", "assets/images/14plus-preto2.webp", "assets/images/14plus-preto3.webp", "assets/images/14plus-preto4.webp"] },
  { model: "iPhone 14 Plus", color: "Azul", colorHex: "#A9C0D3", images : ["assets/images/14plus-azul.webp", "assets/images/14plus-azul2.webp", "assets/images/14plus-azul3.webp", "assets/images/14plus-azul4.webp"] }, 
  { model: "iPhone 14 Plus", color: "Roxo", colorHex: "#DDD4E8", images : ["assets/images/14plus-roxo.webp", "assets/images/14plus-roxo2.webp", "assets/images/14plus-roxo3.webp", "assets/images/14plus-roxo4.webp"] },
  { model: "iPhone 14 Plus", color: "Amarelo", colorHex: "#FDF19B", inStock: false },
  { model: "iPhone 14 Plus", color: "Vermelho", colorHex: "#C8102E", inStock: false },

  // iPhone 14 Pro Max
  { model: "iPhone 14 Pro Max", color: "Dourado", colorHex: "#F5E1C3", images: ["assets/images/14pm-dourado.webp", "assets/images/14pm-dourado2.webp", "assets/images/14pm-dourado3.webp", "assets/images/14pm-dourado4.webp"] },
  { model: "iPhone 14 Pro Max", color: "Prateado", colorHex: "#EAEAE7", images: ["assets/images/14pm-prata.webp", "assets/images/14pm-prata2.webp", "assets/images/14pm-prata3.webp", "assets/images/14pm-prata4.webp"] },

  // iPhone 15
  { model: "iPhone 15", color: "Rosa", colorHex: "#FAD2D4", images: ["assets/images/15-rosa.webp", "assets/images/15-rosa2.webp", "assets/images/15-rosa3.webp", "assets/images/iphone15-4.webp"] }, 
  { model: "iPhone 15", color: "Verde", colorHex: "#D2E7D6", inStock: false },
  { model: "iPhone 15", color: "Amarelo", colorHex: "#FCF5C9", inStock: false },

  // iPhone 15 Pro
  { model: "iPhone 15 Pro", color: "Titânio Preto", colorHex: "#303032", images: ["assets/images/15pro-tip.webp", "assets/images/15pro-tip2.webp", "assets/images/15pro-tip3.webp", "assets/images/15pro-tip4.webp"] },
  { model: "iPhone 15 Pro", color: "Titânio Azul", colorHex: "#2F3C4B", images: ["assets/images/15pro-tia.webp", "assets/images/15pro-tia2.webp", "assets/images/15pro-tia3.webp", "assets/images/15pro-tia4.webp"] }, 
  { model: "iPhone 15 Pro", color: "Titânio Branco", colorHex: "#E3E4E5", images: ["assets/images/15pro-tib.webp", "assets/images/15pro-tib2.webp", "assets/images/15pro-tib3.webp", "assets/images/15pro-tib4.webp"] }, 

  // iPhone 15 Pro Max
  { model: "iPhone 15 Pro Max", color: "Titânio Azul", colorHex: "#2F3C4B", images: ["assets/images/15pro-tia.webp", "assets/images/15pro-tia2.webp", "assets/images/15pro-tia3.webp", "assets/images/15pro-tia4.webp"] },
  { model: "iPhone 15 Pro Max", color: "Titânio Branco", colorHex: "#E3E4E5", images: ["assets/images/15pro-tib.webp", "assets/images/15pro-tib2.webp", "assets/images/15pro-tib3.webp", "assets/images/15pro-tib4.webp"] },
 
  // iPhone 16
  { model: "iPhone 16", color: "Branco", colorHex: "#FFFFFF", images: ["assets/images/16b.webp", "assets/images/16b2.webp", "assets/images/16b3.webp", "assets/images/16-4.webp"] }, 
  { model: "iPhone 16", color: "Rosa", colorHex: "#FAAFBA", images: ["assets/images/16rosa.webp", "assets/images/16rosa2.webp", "assets/images/16rosa3.webp", "assets/images/16-4.webp"] },
  { model: "iPhone 16", color: "Verde-cinza", colorHex: "#98B6B1", inStock: false }, 

  // iPhone 16 Pro
  { model: "iPhone 16 Pro", color: "Titânio Natural", colorHex: "#A09E99", images: ["assets/images/16pm-tin.webp", "assets/images/16pm-tin2.webp", "assets/images/16pm-tin3.webp", "assets/images/16pm-4.webp"] }, 
  { model: "iPhone 16 Pro", color: "Titânio Preto", colorHex: "#3C3D3A", images: ["assets/images/16pm-tip.webp", "assets/images/16pm-tip2.webp", "assets/images/16pm-tip3.webp", "assets/images/16pm-4.webp"] }, 
  { model: "iPhone 16 Pro", color: "Titânio Branco", colorHex: "#EAEAE7", images: ["assets/images/16pm-tib.webp", "assets/images/16pm-tib2.webp", "assets/images/16pm-tib3.webp", "assets/images/16pm-4.webp"] }, 

  // iPhone 16 Pro Max
  { model: "iPhone 16 Pro Max", color: "Titânio Deserto", colorHex: "#C7B8A1", images: ["assets/images/16protitaniodeserto.webp", "assets/images/16pm-tid2.webp", "assets/images/16pm-tid3.webp", "assets/images/16pm-4.webp"] },
  { model: "iPhone 16 Pro Max", color: "Titânio Preto", colorHex: "#3C3D3A", images: ["assets/images/16pm-tip.webp", "assets/images/16pm-tip2.webp", "assets/images/16pm-tip3.webp", "assets/images/16pm-4.webp"] },
  { model: "iPhone 16 Pro Max", color: "Titânio Branco", colorHex: "#EAEAE7", images: ["assets/images/16pm-tib.webp", "assets/images/16pm-tib2.webp", "assets/images/16pm-tib3.webp", "assets/images/16pm-4.webp"] },

  // iPhone 17
  { model: "iPhone 17", color: "Preto", colorHex: "#111111", images: ["assets/images/17preto.webp", "assets/images/17preto2.webp", "assets/images/17preto3.webp", "assets/images/17preto4.webp"] }, 
  { model: "iPhone 17", color: "Prateado", colorHex: "#DDDDDD", images: ["assets/images/17branco.webp", "assets/images/17branco2.webp", "assets/images/17branco3.webp", "assets/images/17branco4.webp"] },  

  // iPhone 17 Pro
  { model: "iPhone 17 Pro", color: "Laranja-cósmico", colorHex: "#D46E30", images: ["assets/images/17pro-la.webp", "assets/images/17pro-la2.webp", "assets/images/17pro-la3.webp", "assets/images/17pro-la4.webp"] },
  { model: "iPhone 17 Pro", color: "Azul-intenso", colorHex: "#101F35", images: ["assets/images/17pro-az.webp", "assets/images/17pro-az2.webp", "assets/images/17pro-az3.webp", "assets/images/17pro-az4.webp"] }, 
 
  // iPhone 17 Pro Max
  { model: "iPhone 17 Pro Max", color: "Prateado", colorHex: "#C0C0C0", images: ["assets/images/17promax-prata.webp", "assets/images/17pro-prata2.webp", "assets/images/17pro-prata3.webp", "assets/images/17pro-prata4.webp"] },
  { model: "iPhone 17 Pro Max", color: "Azul-intenso", colorHex: "#101F35", images: ["assets/images/17promax-az.webp", "assets/images/17pro-az2.webp", "assets/images/17pro-az3.webp", "assets/images/17pro-az4.webp"] },

  // Capa de Silicone
  { model: "Capa de Silicone", color: "Branco", colorHex: "#FFFFFF", images: ["assets/images/capinha-branca.webp"] },
  { model: "Capa de Silicone", color: "Azul", colorHex: "#3A86C8", images: ["assets/images/capinha-azul.webp"] },
  { model: "Capa de Silicone", color: "Verde", colorHex: "#5E9E7A", images: ["assets/images/capinha-verde.webp"] },
  { model: "Capa de Silicone", color: "Rosa", colorHex: "#ECA3B4", images: ["assets/images/capinha-rosa.webp"] },
  { model: "Capa de Silicone", color: "Vermelho", colorHex: "#C83B3B", images: ["assets/images/capinha-vermelha.webp"] },
  { model: "Capa de Silicone", color: "Lilás", colorHex: "#D3C2E8", images: ["assets/images/capinha-lilas.webp"] },
  { model: "Capa de Silicone", color: "Bege", colorHex: "#EAE3D2", images: ["assets/images/capinha-bege.webp"] }
];

// Injetar dinamicamente as variantes extras baseando-se nos modelos base correspondentes
extraVariants.forEach(variant => {
  // Encontrar TODOS os produtos base cadastrados estaticamente para este modelo
  const bases = products.filter(p => p.model === variant.model && (p.category === "iphone" || p.category === "acessorios"));
  
  bases.forEach(base => {
    // Verificar se já existe a variante para esta cor e armazenamento específicos
    const colorAndStorageExists = products.some(p => 
      p.model === variant.model && 
      p.color.toLowerCase() === variant.color.toLowerCase() && 
      p.storage === base.storage
    );
    
    if (!colorAndStorageExists) {
      // Isolar o path do ID antes da cor (ex: "iphone-11-64-" ou "iphone-11-128-")
      const cleanModelPath = base.id.substring(0, base.id.lastIndexOf('-') + 1);
      const colorId = variant.color.toLowerCase().replace(/\s+/g, '-');
      const newId = `${cleanModelPath}${colorId}`;
      
      const storagePart = base.storage && base.storage !== 'N/A' ? `${base.storage} ` : '';
      const newVariant = {
        ...base,
        id: newId,
        name: `${base.model} ${storagePart}${variant.color}`,
        color: variant.color,
        colorHex: variant.colorHex,
        images: variant.images || ["assets/images/iphocell.jpg"], // Usa as imagens customizadas se existirem, senão usa a foto provisória da iphocell
        inStock: variant.inStock !== undefined ? variant.inStock : true
      };
      
      products.push(newVariant);
    }
  });
});
