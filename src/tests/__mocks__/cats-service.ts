export class CatsServiceMock {

    static getAll() {
        return {
            data: [{
                id: "1kl",
                url: "https://cdn2.thecatapi.com/images/1kl.jpg",
                width: 500,
                height: 395,
            },
            ]
        }
    }
}