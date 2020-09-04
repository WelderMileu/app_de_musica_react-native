const pathAlbumTypes = "../../assets/musicTypes";
const pathAlbum = "../../assets/musicAlbums";
const pathMusic = "../../assets/musics";

export default [
    {
        description: "Gospel",
        image : require(`${pathAlbumTypes}/gospel.png`),
        paths : [
            {
                album : "Me Leva - Deice Nascimento (Ao Vivo)",
                author : "Deice Nascimento",
                imgAlbum: require(`${pathAlbum}/me_leva.jpg`),
                music : require(`${pathMusic}/me_leva.mp3`)
            },
            {
                album : "Teu Reino - Vinicios Zolato",
                author : "Vinicios Zoleto",
                imgAlbum: require(`${pathAlbum}/teu_reino.jpg`),
                music : require(`${pathMusic}/teu_reino.mp3`)
            },
            {
                album: "Ousado Amor - Isaias Saad",
                author : "Isaias Saad",
                imgAlbum: require(`${pathAlbum}/ousado_amor.jpg`),
                music : require(`${pathMusic}/ousado_amor.mp3`)
            }
        ]
    },

    {
        description: "Country",
        image : require(`${pathAlbumTypes}/country.jpg`),
        paths : [
            {
                album: "Toby Keith - I Love This Bar",
                author: "Toby Keith",
                imgAlbum: require(`${pathAlbum}/I_Love_This_Bar.jpg`),
                music: require(`${pathMusic}/I_Love_This_Bar.mp3`)
            },
            {
                album: "Blake Shelton - God's Country (Official Music Video)",
                author: "Blake Shelton",
                imgAlbum: require(`${pathAlbum}/God_s_Country.jpg`),
                music: require(`${pathMusic}/God_s_Country.mp3`)
            },
            {
                album: "Blackberry Smoke - One Horse Town (Official Acoustic Video)",
                author: "Blackberry Smoke",
                imgAlbum: require(`${pathAlbum}/One_Horse_Town.jpg`),
                music: require(`${pathMusic}/One_Horse_Town.mp3`)
            },
        ]
    },

    {
        description: "Sertanejo",
        image : require(`${pathAlbumTypes}/sertanejo.jpg`),
        paths : [
            {
                album: "Henrique e Juliano - BRIGA FEIA - DVD Ao Vivo No Ibirapuer",
                author: "Henrique e Juliano",
                imgAlbum: require(`${pathAlbum}/briga_feia.jpg`),
                music: require(`${pathMusic}/briga_feia.mp3`)
            },
            {
                album: "Jorge & Mateus - Sosseguei (Como Sempre Feito Nunca) [Vídeo Oficia",
                author: "Jorge & Mateus",
                imgAlbum: require(`${pathAlbum}/sosseguei.jpg`),
                music: require(`${pathMusic}/sosseguei.mp3`)
            },
            {
                album: "Zé Neto e Cristiano - NOTIFICAÇÃO PREFERIDA",
                author: "Zé Neto e Cristiano",
                imgAlbum: require(`${pathAlbum}/notificacao_preferida.jpg`),
                music: require(`${pathMusic}/notificacao_preferida.mp3`)
            },
        ]
    },

    {
        description: "Rock",
        image : require(`${pathAlbumTypes}/rock.jpg`),
        paths : [
            {
                album: "The Beatles - Revolution",
                author: "The Beatles",
                imgAlbum: require(`${pathAlbum}/revolution.jpg`),
                music: require(`${pathMusic}/revolution.mp3`)
            },
            {
                album: "Nirvana - Come As You Are",
                author: "Nirvana",
                imgAlbum: require(`${pathAlbum}/Come_As_You_Are.jpg`),
                music: require(`${pathMusic}/Come_As_You_Are.mp3`)
            },
            {
                album: "ID2 - Santo Sopro",
                author: "ID2",
                imgAlbum: require(`${pathAlbum}/Santo_Sopro.jpg`),
                music: require(`${pathMusic}/Santo_Sopro.mp3`)
            },
        ]
    }
]