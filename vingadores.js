const capitaoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo americano",
    armaSecundaria: "Habilidades de combate",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" +
               "Codinome do personagem: " + this.codinome + "\n" +
               "Arma principal: " + this.armaPrincipal + "\n" +
               "Arma secundaria: " + this.armaSecundaria + "\n" +
               "Nível de força: " + this.forca + "\n" +
               "Nível de velocidade: " + this.velocidade + "\n" +
               "Nível de resistência: " + this.resistencia;
    }
};

const doutorEstranho = {
    nome: "Stephen Strange",
    codinome: "Doutor Estranho",
    armaPrincipal: "Magia",
    armaSecundaria: "Olho de Agamotto",
    velocidade: 70,
    forca: 60,
    resistencia: 85,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" +
               "Codinome do personagem: " + this.codinome + "\n" +
               "Arma principal: " + this.armaPrincipal + "\n" +
               "Arma secundaria: " + this.armaSecundaria + "\n" +
               "Nível de força: " + this.forca + "\n" +
               "Nível de velocidade: " + this.velocidade + "\n" +
               "Nível de resistência: " + this.resistencia;
    }
};

const panteraNegra = {
    nome: "T'Challa",
    codinome: "Pantera Negra",
    armaPrincipal: "Garras de Vibranium",
    armaSecundaria: "Habilidades aprimoradas",
    velocidade: 90,
    forca: 80,
    resistencia: 85,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" +
               "Codinome do personagem: " + this.codinome + "\n" +
               "Arma principal: " + this.armaPrincipal + "\n" +
               "Arma secundaria: " + this.armaSecundaria + "\n" +
               "Nível de força: " + this.forca + "\n" +
               "Nível de velocidade: " + this.velocidade + "\n" +
               "Nível de resistência: " + this.resistencia;
    }
};

const homemAranha = {
    nome: "Peter Parker",
    codinome: "Homem-Aranha",
    armaPrincipal: "Lançadores de teia",
    armaSecundaria: "Sentido Aranha",
    velocidade: 95,
    forca: 75,
    resistencia: 80,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" +
               "Codinome do personagem: " + this.codinome + "\n" +
               "Arma principal: " + this.armaPrincipal + "\n" +
               "Arma secundaria: " + this.armaSecundaria + "\n" +
               "Nível de força: " + this.forca + "\n" +
               "Nível de velocidade: " + this.velocidade + "\n" +
               "Nível de resistência: " + this.resistencia;
    }
};

const loki = {
    nome: "Loki Laufeyson",
    codinome: "Loki",
    armaPrincipal: "Magia e Ilusões",
    armaSecundaria: "Cajado Chitauri",
    velocidade: 75,
    forca: 70,
    resistencia: 80,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" +
               "Codinome do personagem: " + this.codinome + "\n" +
               "Arma principal: " + this.armaPrincipal + "\n" +
               "Arma secundaria: " + this.armaSecundaria + "\n" +
               "Nível de força: " + this.forca + "\n" +
               "Nível de velocidade: " + this.velocidade + "\n" +
               "Nível de resistência: " + this.resistencia;
    }
};

const personagens = [capitaoAmerica, doutorEstranho, panteraNegra, homemAranha, loki];

compararPersonagens();
