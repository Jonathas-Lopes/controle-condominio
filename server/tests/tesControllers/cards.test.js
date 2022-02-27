const cardModel = require("../../src/controller/cardController");
const connection = require("../../src/db/connection/connection");
const Card = [
	{
		_id: "UHDYn755TE6qBfDH8hlwmg==",
		type: "venda",
		title: "Vende-se Sofá usado",
		description:
			"Sofá usado ideal para queimar em dia de frio ou para cama de cachorro",
		body: "Sofá de três lugares preto, com apenas dois furos pela bagatela de 500,00 R$. Interessados entrar em contato com o 101A",
		_userId: "XMa8bdt3TUieCF5R7sF/Yg==",
		imgPath: "/cardPhotos/sofá",
	},
	{
		_id: "dHq+EntatEm1lzflDKGexQ==",
		type: "doacao",
		title: "doa-se Sofá usado",
		description:
			"Sofá usado ideal para queimar em dia de frio ou para cama de cachorro",
		body: "Sofá de três lugares preto, com apenas dois furos. Interessados entrar em contato com o 101A",
		_userId: "tXMa8bdt3TUieCF5R7sF/Yg==",
		imgPath: "/cardPhotos/sofá",
	},
	{
		_id: "LNQ0Yd2flk2mlRKEVFFF8g==",
		type: "aviso",
		title: "Sofá usado abandonado no condominio",
		description: "Sofá usado servindo de cama para cachorro",
		body: "Sofá de três lugares preto, rasgado jogado no condominio. Responsavel pelo abandono, favor retirar imediatamente",
		_userId: "XMa8bdt3TUieCF5R7sF/Yg==",
		imgPath: "/cardPhotos/sofá",
	},
];

describe("Test cardModel", () => {
	beforeAll(async () => {
		connection.connect();
		await cardModel.CardModel.deleteMany({
			title: Card.map((item) => item.title),
		});
	});
	afterAll(async () => {});
	it("should test insert Cards", async () => {
		await cardModel.insertCard(Card);
		expect(Card).toStrictEqual(
			(await cardModel.CardModel.find({}).lean()).map((item) => ({
				_id: item._id,
				type: item.type,
				title: item.title,
				description: item.description,
				body: item.body,
				_userId: item._userId,
				imgPath: item.imgPath,
			}))
		);
	});
	it("should test listCards", async () => {
		const cardList = await cardModel.listCards();
		expect(cardList).toStrictEqual(await cardModel.CardModel.find({}));
	});
	it("should test list Cards type Venda", async () => {
		const cardList = await cardModel.listCards("venda");
		expect(cardList).toStrictEqual(
			await cardModel.CardModel.find({ type: "venda" })
		);
	});
	it("should test list Cards type Doacao", async () => {
		const cardList = await cardModel.listCards("doacao");
		expect(cardList).toStrictEqual(
			await cardModel.CardModel.find({ type: "doacao" })
		);
	});
	it("should test list Cards type Aviso", async () => {
		const cardList = await cardModel.listCards("aviso");
		expect(cardList).toStrictEqual(
			await cardModel.CardModel.find({ type: "aviso" })
		);
	});
	it("should test delete a Card", async () => {
		const cardToDelete = Array.of(
			await cardModel.CardModel.distinct("_id", {})
		);
		await cardModel.deleteCard(cardToDelete[0]);
		expect(await cardModel.CardModel.find({ type: "aviso" })).toStrictEqual([]);
	});
});
