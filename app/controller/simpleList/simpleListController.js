import simpleList from '../../repositories/simpleList';


const list = async (req, res) => {
	const { query } = req;
	const { skip = 0, limit = 0, searchText } = query;
	const condition = {};
	if (searchText) {
		const searchPattern = searchText.split(" ").map(element => new RegExp(element, "i"));
		condition.text = { $in: searchPattern }
	}
	
	const result = await simpleList.find(condition, {}, { skip, limit }).lean();

	res.send({ data: result });
}

const create = async (req, res) => {
	const {
		body
	} = req;

	const result = await simpleList.create({ text: body.text });
	res.send({ data: result });
}

const update = async (req, res, next) => {
	const {
		params,
		body
	} = req;

	const { id } = params;
	const listItem = await simpleList.findOne({ _id: id });

	if (!listItem) {
		next({ error: "Not found", message: "Record Not Found!", status: 400 })
	}

	const result = await simpleList.updateOne({ _id: id }, { text: body.text });
	res.send({ data: {}});
}

const removeOne = async (req, res) => {
	const {
		params,
		body
	} = req;

	const { id } = params;

	const listItem = await simpleList.findOne({ _id: id });

	if (!listItem) {
		next({ error: "Not found", message: "Record Not Found!", status: 400 })
	}

	const result = await simpleList.deleteOne({ _id: id });
	res.send({ data: {}});
}

export default { list, create, update, removeOne}