import { add{{pascalCase name}}s } from "../services";

const {{camelCase name}}Seed = async () => {
	const {{camelCase name}}s = [
		{
			id: "Test {{pascalCase name}} 1",
		},
		{
			id: "Test {{pascalCase name}} 2",
		},
		{
			id: "Test {{pascalCase name}} Delete 1",
		},
		{
			id: "Test {{pascalCase name}} Delete 2",
		},
	];

	await add{{pascalCase name}}s({{camelCase name}}s);
};

export default {{camelCase name}}Seed;

