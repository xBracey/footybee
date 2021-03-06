import {
	add{{pascalCase name}},
	add{{pascalCase name}}s,
	delete{{pascalCase name}},
} from "../services";
import I{{pascalCase name}}, { isValid{{pascalCase name}} } from "../models/{{pascalCase name}}/type";
import controllerResponse from "./controller";
import { StatusError, checkBody, validateArrayTypeCheck } from "../lib";

const handleError = (error: StatusError): controllerResponse => {
	const { status, code } = error;

	switch (code) {
		case 0:
			return { status, error: error.message };
		case 1:
			return { status, error: "{{pascalCase name}} ID already exists" };
		case 2:
			return { status, error: error.message };
		case 3:
			return { status, error: error.message };
		case 4:
			return { status, error: "{{pascalCase name}} ID does not exist" };
		case 5:
			return { status, error: error.message };
	}
};

export const createController = async (
	body: I{{pascalCase name}}
): Promise<controllerResponse> => {
	if (!isValid{{pascalCase name}}(body)) {
		return { status: 400, error: "Invalid parameters" };
	}

	const { error, {{camelCase name}} } = await add{{pascalCase name}}(body);

	if (!error) {
		return { status: 200, response: {{camelCase name}} };
	}

	return handleError(error);
};

export const bulkCreateController = async (body: {
	{{camelCase name}}s: I{{pascalCase name}}[];
}): Promise<controllerResponse> => {
	if (
		!checkBody(body) ||
		!body.{{camelCase name}}s ||
		!validateArrayTypeCheck(body.{{camelCase name}}s, isValid{{pascalCase name}})
	) {
		return { status: 400, error: "Invalid parameters" };
	}

	const { error, {{camelCase name}}s } = await add{{pascalCase name}}s(body.{{camelCase name}}s);

	if (!error) {
		return { status: 200, response: {{camelCase name}}s };
	}

	return handleError(error);
};

export const deleteController = async (id: string): Promise<controllerResponse> => {
	const { error, {{camelCase name}} } = await delete{{pascalCase name}}(id);

	if (!error) {
		return { status: 200, response: {{camelCase name}} };
	}

	return handleError(error);
};
