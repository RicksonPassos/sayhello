const {comprimentos} = require('../../bancodedados');


const exibir = (req, res) => {
    return res.status(200).json({"mensagem": "Inglês - Hello Ucraniano - Pryvit Espanhol - Hola Francês - Bonjour Russo - Zdravstvuyte Português - Olá Holandês - Hallo Dinamarquês - Hej Alemão - Hallo Estoniano - Tere Italiano - Ciao Eslovaco - Ahoj Búlgaro - Zdraveĭte Islandês - Hæ Húngaro - Szia Grego - Geia sas Lituano - Sveiki Croata - Bok Checo - Ahoj Luxemburguês - Salut Macedônio - Zdravo Bósnio - Zdravo Bielo-russo - Zdravstvujte Finlandês - Moi Norueguês - Hallo Sueco - Hallå Polonês - Cześć Maltês - Bongu Romeno - Salut Sérvio - Zdravo Esloveno - Živjo Georgiano - Gamarjoba Turco - Merhaba Albanês - Përshëndetje Armênio - Voghju՜yn"});
}

module.exports = {
    exibir
}