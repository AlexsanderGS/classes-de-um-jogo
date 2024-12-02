// Classe genérica para representar um herói
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
      // Determina o tipo de ataque com base no tipo do herói
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "um ataque genérico"; // Caso o tipo seja desconhecido
          break;
      }
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
  }
  
  // Exemplos de uso
  const mago = new Heroi("Gandalf", 300, "mago");
  mago.atacar(); // Saída: O mago atacou usando magia.
  
  const guerreiro = new Heroi("Arthur", 35, "guerreiro");
  guerreiro.atacar(); // Saída: O guerreiro atacou usando espada.
  
  const monge = new Heroi("Shifu", 50, "monge");
  monge.atacar(); // Saída: O monge atacou usando artes marciais.
  
  const ninja = new Heroi("Naruto", 20, "ninja");
  ninja.atacar(); // Saída: O ninja atacou usando shuriken.
  