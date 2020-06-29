import { models } from "../config";
import I{{pascalCase name}} from "../models/{{camelCase name}}/type";

const add{{pascalCase name}} = async ({{camelCase name}}Data: I{{pascalCase name}} => {
    const {{camelCase name}} = await models.{{pascalCase name}}.create({{camelCase name}}Data);
    return {{camelCase name}};
};

const add{{pascalCase name}}s = async ({{camelCase name}}sData: I{{pascalCase name}}[]) => {
    const {{camelCase name}}s = await models.{{pascalCase name}}.bulkCreate({{camelCase name}}sData);
    return {{camelCase name}}s;
};

const get{{pascalCase name}} = async (id: number) => {
	const {{camelCase name}} = await models.{{pascalCase name}}.findOne({
		where: {
			id,
		},
    });
    return {{camelCase name}};
};

const get{{pascalCase name}}s = async (ids: number[]) => {
	const {{camelCase name}}s = await models.{{pascalCase name}}.findAll({
		where: {
			id: ids,
		},
    });
    return {{camelCase name}}s;
};

const getAll{{pascalCase name}}s = async () => {
    const {{camelCase name}}s = await models.{{pascalCase name}}.findAll();
    return {{camelCase name}}s;
};

const delete{{pascalCase name}} = async (id: number) => {
	const {{camelCase name}} = await models.{{pascalCase name}}.destroy({
		where: {
			id,
		},
    });
    return {{camelCase name}};
};

export {
	add{{pascalCase name}},
	add{{pascalCase name}}s,
	get{{pascalCase name}},
	get{{pascalCase name}}s,
	getAll{{pascalCase name}}s,
	delete{{pascalCase name}},
};
