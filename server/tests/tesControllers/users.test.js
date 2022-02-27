const connection = require("../../src/db/connection/connection");
const userModel = require("../../src/controller/userController");
const User = [
	{
		_id: "XMa8bdt3TUieCF5R7sF/Yg==",
		email: "teste@email.com",
		password: "teste1234",
		name: "teste da Silva",
		cpf: "12345678990",
		apt: "1",
		torre: "AB",
		admin: false,
		imgPath: "/whatever",
	},
];

describe("Test userModel", () => {
	beforeAll(async () => {
		connection.connect();
		await userModel.UserModel.deleteMany({ cpf: User.map((item) => item.cpf) });
	});

	it("should test insertUser", async () => {
		await userModel.insertUser(User);
		expect(
			User.map((item) => ({
				email: item.email,
				name: item.name,
				cpf: item.cpf,
				apt: item.apt,
				torre: item.torre,
				imgPath: item.imgPath,
			}))
		).toStrictEqual(
			await (
				await userModel.UserModel.find({}).lean()
			).map((item) => ({
				email: item.email,
				name: item.name,
				cpf: item.cpf,
				apt: item.apt,
				torre: item.torre,
				imgPath: item.imgPath,
			}))
		);
	});
	it("should test listUsers", async () => {
		const userList = await userModel.listUsers();
		expect(userList).toStrictEqual(await userModel.UserModel.find({}));
	});
	it("should test delete a User", async () => {
		const userToDelete = Array.of(
			await userModel.UserModel.distinct("_id", {})
		);
		await userModel.deleteUser(userToDelete[0]);
		expect(await userModel.UserModel.find({ cpf: User[0]._id })).toStrictEqual(
			[]
		);
	});
});
