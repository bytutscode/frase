const quotes = [
    {
        id: 1,
        frase: "A imaginação é mais importante que o conhecimento.",
        autor: "Albert Einstein",
        ano: 1941
    },
    {
        id: 2,
        frase: "O sucesso é ir de fracasso em fracasso sem perder entusiasmo.",
        autor: "Winston Churchill",
        ano: 1940
    },
    {
        id: 3,
        frase: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
        autor: "John Lennon",
        ano: 1980
    },
    {
        id: 4,
        frase: "Se você não está disposto a arriscar, esteja disposto a uma vida comum.",
        autor: "Jim Rohn",
        ano: 2009
    },
    {
        id: 5,
        frase: "Uma jornada de mil milhas começa com um único passo.",
        autor: "Lao Tzu",
        ano: "Século 6 a.C."
    },
    {
        id: 6,
        frase: "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.",
        autor: "Albert Einstein",
        ano: 1931
    },
    {
        id: 7,
        frase: "O único modo de fazer um excelente trabalho é amar o que você faz.",
        autor: "Steve Jobs",
        ano: 2005
    },
    {
        id: 8,
        frase: "A melhor maneira de prever o futuro é criá-lo.",
        autor: "Peter Drucker",
        ano: 1960
    },
    {
        id: 9,
        frase: "O segredo para o sucesso é a constância do propósito.",
        autor: "Benjamin Disraeli",
        ano: 1873
    },
    {
        id: 10,
        frase: "A vida é o que acontece enquanto você está fazendo outros planos.",
        autor: "Allen Saunders",
        ano: 1957
    },
    {
        id: 11,
        frase: "O conhecimento é poder.",
        autor: "Francis Bacon",
        ano: 1597
    },
    {
        id: 12,
        frase: "A persistência é o caminho do êxito.",
        autor: "Charlie Chaplin",
        ano: 1959
    },
    {
        id: 13,
        frase: "A felicidade é uma borboleta que, quando perseguida, está sempre além do seu alcance, mas que, se você sentar quieto, pode pousar no seu ombro.",
        autor: "Nathaniel Hawthorne",
        ano: 1860
    },
    {
        id: 14,
        frase: "Nossas vidas começam a terminar no dia em que permanecemos em silêncio sobre as coisas que importam.",
        autor: "Martin Luther King Jr.",
        ano: 1967
    },
    {
        id: 15,
        frase: "Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança.",
        autor: "Charles Darwin",
        ano: 1859
    },
    {
        id: 16,
        frase: "A única coisa que devemos temer é o próprio medo.",
        autor: "Franklin D. Roosevelt",
        ano: 1933
    },
    {
        id: 17,
        frase: "Nós nos tornamos o que pensamos.",
        autor: "Buddha",
        ano: "Século 5 a.C."
    },
    {
        id: 18,
        frase: "Tudo o que você pode imaginar é real.",
        autor: "Pablo Picasso",
        ano: 1973
    },
    {
        id: 19,
        frase: "O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor é agora.",
        autor: "Provérbio Chinês",
        ano: "Século 20"
    },
    {
        id: 20,
        frase: "A criatividade é a inteligência se divertindo.",
        autor: "Albert Einstein",
        ano: 1955
    },
    {
        id: 21,
        frase: "Você não pode usar a criatividade para gastar a criatividade. Quanto mais você usa, mais você tem.",
        autor: "Maya Angelou",
        ano: 1993
    },
    {
        id: 22,
        frase: "Não importa o que você decidiu. O que importa é que isso faça você feliz.",
        autor: "Desconhecido",
        ano: "Desconhecido"
    },
    {
        id: 23,
        frase: "Aja como se o que você fizesse fizesse diferença. Isso faz.",
        autor: "William James",
        ano: 1909
    },
    {
        id: 24,
        frase: "Acredite que você pode e você está no meio do caminho.",
        autor: "Theodore Roosevelt",
        ano: 1901
    },
    {
        id: 25,
        frase: "A única maneira de fazer um excelente trabalho é amar o que você faz.",
        autor: "Steve Jobs",
        ano: 2005
    },
    {
        id: 26,
        frase: "Não espere. O momento nunca será o ideal. Comece onde você está e com o que você tem.",
        autor: "Desconhecido",
        ano: "Desconhecido"
    },
    {
        id: 27,
        frase: "A vida é uma aventura ousada ou não é nada.",
        autor: "Helen Keller",
        ano: 1933
    },
    {
        id: 28,
        frase: "Se você quer alguma coisa que nunca teve, precisa fazer algo que nunca fez.",
        autor: "Thomas Jefferson",
        ano: 1801
    },
    {
        id: 29,
        frase: "A vida é como andar de bicicleta. Para manter o equilíbrio, você precisa se manter em movimento.",
        autor: "Albert Einstein",
        ano: "Desconhecido"
    },
    {
        id: 30,
        frase: "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
        autor: "Dalai Lama",
        ano: "Desconhecido"
    },
    {
        id: 31,
        frase: "Uma pessoa que nunca cometeu um erro nunca tentou nada novo.",
        autor: "Albert Einstein",
        ano: "Desconhecido"
    },
    {
        id: 32,
        frase: "O fracasso é o condimento que dá sabor ao sucesso.",
        autor: "Truman Capote",
        ano: "Desconhecido"
    },
    {
        id: 33,
        frase: "A única maneira de fazer um excelente trabalho é amar o que você faz.",
        autor: "Steve Jobs",
        ano: 2005
    },
    {
        id: 34,
        frase: "Nós não podemos resolver nossos problemas com o mesmo pensamento que usamos para criá-los.",
        autor: "Albert Einstein",
        ano: 1945
    },
    {
        id: 35,
        frase: "A maneira de começar é parar de falar e começar a fazer.",
        autor: "Walt Disney",
        ano: "Desconhecido"
    },
    {
        id: 36,
        frase: "A vida é 10% do que acontece comigo e 90% de como eu reajo a isso.",
        autor: "Charles R. Swindoll",
        ano: "Desconhecido"
    },
    {
        id: 37,
        frase: "Você não pode mudar o vento, mas pode ajustar as velas do barco.",
        autor: "Desconhecido",
        ano: "Desconhecido"
    },
    {
        id: 38,
        frase: "Não espere por circunstâncias ideais. Crie-as.",
        autor: "George Bernard Shaw",
        ano: "Desconhecido"
    },
    {
        id: 39,
        frase: "O único limite para nossas realizações de amanhã será nossas dúvidas de hoje.",
        autor: "Franklin D. Roosevelt",
        ano: 1932
    },
    {
        id: 40,
        frase: "Não importa quem você é ou o que faz, dê sempre o seu melhor e algumas pessoas podem gostar disso.",
        autor: "Desconhecido",
        ano: "Desconhecido"
    },
    {
        id: 41,
        frase: "Se você quiser ser feliz, pratique a compaixão.",
        autor: "Dalai Lama",
        ano: "Desconhecido"
    },
    {
        id: 42,
        frase: "A vida é uma peça de teatro que não permite ensaios. Por isso, cante, dance, ria e viva intensamente antes que a cortina se feche e a peça termine sem aplausos.",
        autor: "Charles Chaplin",
        ano: "Desconhecido"
    },
    {
        id: 43,
        frase: "Tudo o que você sempre quis está do outro lado do medo.",
        autor: "George Addair",
        ano: "Desconhecido"
    },
    {
        id: 44,
        frase: "Quando uma porta da felicidade se fecha, outra se abre; mas frequentemente olhamos tanto para a porta fechada que não vemos a que foi aberta para nós.",
        autor: "Helen Keller",
        ano: "Desconhecido"
    },
    {
        id: 45,
        frase: "A vida é curta, e é a única que temos.",
        autor: "Sarah Ban Breathnach",
        ano: "Desconhecido"
    },
    {
        id: 46,
        frase: "A oportunidade nunca é perdida; alguém vai aproveitar as que você perdeu.",
        autor: "Desconhecido",
        ano: "Desconhecido"
    },
    {
        id: 47,
        frase: "Faça o que você pode, com o que você tem, onde você está.",
        autor: "Theodore Roosevelt",
        ano: "Desconhecido"
    },
    {
        id: 48,
        frase: "Você é o resultado dos seus próprios atos, mas também é o resultado das oportunidades que aproveitou.",
        autor: "Desconhecido",
        ano: "Desconhecido"
    },
    {
        id: 49,
        frase: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        autor: "Eleanor Roosevelt",
        ano: "Desconhecido"
    },
    {
        id: 50,
        frase: "Uma jornada de mil milhas começa com um único passo.",
        autor: "Lao Tzu",
        ano: "Século 6 a.C."
    }
];

module.exports = quotes;
