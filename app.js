const express = require("express");
const app = express();

app.use(require('cors')());
app.use(express.static(__dirname));

app.get("/products/", (req, res, next) => {
    return res.status(200).send([
        {
            "title": "Playstation 4",
            "description": "Vídeogame Playstation 4 HD de 500gb",
            "details": "O sistema PlayStation®4 redefine a jogabilidade com riqueza e envolvimento, além de velocidade e gráficos poderosos",
            "like": false,
            "img": "playstation.png",
            "preco": "4100",
        },
        {
            "title": "Xbox 360",
            "description": "2 Controles + 5 Jogos",
            "details": "Experimente uma nova geração de jogos e entretenimento com Xbox",
            "like": false,
            "img": "xbox.jpg",
            "preco": "3600",
        }
    ]);
})

app.listen(process.env.port || 8050, () => {
    console.log(`[API] - Ativo :D | http://localhost:8050`);
});

module.exports = app;