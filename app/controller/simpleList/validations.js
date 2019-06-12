import { isValidObjectId } from '../../libs/utilities';

export default Object.freeze({
  list: {
    limit: {
      errorMessage: "limit should be a number!",
      in: ["query"],
      isInt: true,
      optional: true,
      toInt: true
    },
    skip: {
      errorMessage: "skip should be a number!",
      in: ["query"],
      isInt: true,
      optional: true,
      toInt: true
    },
    searchText: {
      in: ["query"],
      optional: true,
      isLength: {
        errorMessage: "Minimum length of wildcard should be 3!",
        options: { min: 3 }
      }
    },
  },
  create: {
    text: {
			in: ["body"],
			isString: true,
			optional: false,
    }
	},
	update: {
    id: {
      in: ["params"],
      errorMessage: "ID Bad Format",
      optional: false,
      custom: {
        options: id => isValidObjectId(id),
        errorMessage: "ID Bad Format"
      }
    },
    text: {
			in: ["body"],
			isString: true,
      optional: false,
    }
	},
	delete: {
    id: {
      in: ["params"],
      errorMessage: "ID Bad Format",
      optional: false,
      custom: {
        options: id => isValidObjectId(id),
        errorMessage: "ID Bad Format"
      }
    }
  }
});
