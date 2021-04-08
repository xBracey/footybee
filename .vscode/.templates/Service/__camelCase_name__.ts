import { models } from "../config";
import I{{pascalCase name}} from "../models/{{pascalCase name}}/type";
import { StatusError } from "../lib";
import { {{pascalCase name}} } from "../models";
import { ValidationError } from "sequelize";

interface I{{pascalCase name}}Response {
	error?: StatusError;
	{{camelCase name}}: {{pascalCase name}} | null;
}

interface I{{pascalCase name}}sResponse {
	error?: StatusError;
	{{camelCase name}}s: {{pascalCase name}}[] | null;
}

const add{{pascalCase name}} = async ({{camelCase name}}Data: I{{pascalCase name}}): Promise<I{{pascalCase name}}Response> => {
	try {
		const {{camelCase name}} = await models.{{pascalCase name}}.create({{camelCase name}}Data);
		return { {{camelCase name}} };
	} catch (error) {
		return { error: new StatusError(error), {{camelCase name}}: null };
	}
};

const add{{pascalCase name}}s = async ({{camelCase name}}sData: I{{pascalCase name}}[]): Promise<I{{pascalCase name}}sResponse> => {
	try {
		const {{camelCase name}}s = await models.{{pascalCase name}}.bulkCreate({{camelCase name}}sData);
		return { {{camelCase name}}s };
	} catch (error) {
		return { error: new StatusError(error), {{camelCase name}}s: null };
	}
};

const get{{pascalCase name}} = async (id: number): Promise<I{{pascalCase name}}Response> => {
	const {{camelCase name}} = await models.{{pascalCase name}}.findOne({
		where: {
			id,
		},
    });
    return { {{camelCase name}} };
};

const get{{pascalCase name}}s = async (ids: number[]): Promise<I{{pascalCase name}}sResponse> => {
	const {{camelCase name}}s = await models.{{pascalCase name}}.findAll({
		where: {
			id: ids,
		},
    });
    return { {{camelCase name}}s };
};

const getAll{{pascalCase name}}s = async (): Promise<I{{pascalCase name}}sResponse> => {
    const {{camelCase name}}s = await models.{{pascalCase name}}.findAll();
    return { {{camelCase name}}s };
};

const delete{{pascalCase name}} = async (id: number): Promise<I{{pascalCase name}}Response> => {
	const {{camelCase name}} = await models.{{pascalCase name}}.destroy({
		where: {
			id,
		},
    });

	const error = new StatusError(
		new ValidationError("Primary Key not found when deleting entity")
	);
	
	return {{camelCase name}} ? { {{camelCase name}}: null } : { error, {{camelCase name}}: null };
};

export {
	add{{pascalCase name}},
	add{{pascalCase name}}s,
	get{{pascalCase name}},
	get{{pascalCase name}}s,
	getAll{{pascalCase name}}s,
	delete{{pascalCase name}},
};
