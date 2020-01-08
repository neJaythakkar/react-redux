export const createSetter = (name, props) =>
	props.map(prop => {
		const type = `${name}/${prop}`;
		const setter = payload => ({ type, payload });
		setter.toString = () => type;
		return setter;
	});

export const createReducer = (defaultState, handlers) => (
	state = defaultState,
	action
) => {
	if (handlers[action.type])
		return handlers[action.type](state, action.payload);
	return state;
};

export const createSelectors = (name, props) =>
	props.map(prop => state => state[name][prop]);