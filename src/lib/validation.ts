import validator from "validator";

const checkBody = (body: object) => {
	return !!body && typeof body == "object";
};

const validateArray = (data: any[], type: string) => {
	return (
		!!data &&
		typeof data == "object" &&
		data.length &&
		data.every(singleData => typeof singleData === type)
	);
};

const validateArrayTypeCheck = (data: any[], typeCheck: Function) => {
	return (
		!!data &&
		typeof data == "object" &&
		data.length &&
		data.every(singleData => typeCheck(singleData))
	);
};

const validateType = (data: any, type: string, required: boolean) => {
	if (required) {
		return !!data && typeof data == type;
	} else {
		return (!!data && typeof data == type) || !data;
	}
};

const validateDate = (data: string, required: boolean) => {
	if (required) {
		return !!data && validator.isISO8601(data);
	} else {
		return (!!data && validator.isISO8601(data)) || !data;
	}
};

const validateOneExists = (data: any[]) => {
	return data.some(value => value);
};

export {
	checkBody,
	validateArray,
	validateArrayTypeCheck,
	validateType,
	validateDate,
	validateOneExists,
};
