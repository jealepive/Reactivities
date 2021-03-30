import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
	activity: Activity | undefined;
	closeForm: () => void;
}

export default function ActivityForm({
	activity: selectedActivity,
	closeForm,
}: Props) {
	const initialState = selectedActivity ?? {
		id: "",
		title: "",
		category: "",
		description: "",
		date: "",
		city: "",
		venue: "",
	};

	const [activity, setActivity] = useState(initialState);

	function handleSubmit() {
		console.log(activity);
	}

	function handleInputChange(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) {
		const { name, value } = event.target;
		setActivity({ ...activity, [name]: value });
	}

	return (
		<Segment clearing>
			<Form onSubmit={handleSubmit} autoComplet="off">
				<Form.Input
					onChange={handleInputChange}
					placeholder="Title"
					value={activity?.title}
					name="title"
				></Form.Input>
				<Form.TextArea
					onChange={handleInputChange}
					placeholder="Description"
					value={activity?.description}
					name="description"
				></Form.TextArea>
				<Form.Input
					onChange={handleInputChange}
					placeholder="Category"
					value={activity?.category}
					name="category"
				></Form.Input>
				<Form.Input
					onChange={handleInputChange}
					placeholder="Date"
					value={activity?.date}
					name="date"
				></Form.Input>
				<Form.Input
					onChange={handleInputChange}
					placeholder="City"
					value={activity?.city}
					name="city"
				></Form.Input>
				<Form.Input
					onChange={handleInputChange}
					placeholder="Venue"
					value={activity?.venue}
					name="venue"
				></Form.Input>
				<Button
					floated="right"
					positive
					type="submit"
					content="Submit"
				></Button>
				<Button
					onClick={closeForm}
					floated="right"
					type="button"
					content="Cancel"
				></Button>
			</Form>
		</Segment>
	);
}
