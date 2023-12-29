type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (value: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: string) => {
		props.setCurrentText(event)
	};

	return (
		<input
			id={'hw04-input'}
			type="text"
			value={props.currentText}
			onChange={(event) => {
				onChangeHandler(event.currentTarget.value)
			}}
		/>
	);
};
