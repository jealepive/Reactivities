import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const { closeForm, selectedActivity, createActivity, updateActivity, loading } = activityStore;

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    };

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input onChange={handleInputChange} placeholder='Title' value={activity?.title} name='title'></Form.Input>
                <Form.TextArea
                    onChange={handleInputChange}
                    placeholder='Description'
                    value={activity?.description}
                    name='description'
                ></Form.TextArea>
                <Form.Input onChange={handleInputChange} placeholder='Category' value={activity?.category} name='category'></Form.Input>
                <Form.Input onChange={handleInputChange} type='date' placeholder='Date' value={activity?.date} name='date'></Form.Input>
                <Form.Input onChange={handleInputChange} placeholder='City' value={activity?.city} name='city'></Form.Input>
                <Form.Input onChange={handleInputChange} placeholder='Venue' value={activity?.venue} name='venue'></Form.Input>
                <Button loading={loading} floated='right' positive type='submit' content='Submit'></Button>
                <Button onClick={closeForm} floated='right' type='button' content='Cancel'></Button>
            </Form>
        </Segment>
    );
});
