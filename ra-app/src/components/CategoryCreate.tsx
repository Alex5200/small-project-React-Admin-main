import { Create, SimpleForm, TextInput } from 'react-admin';

export const CategoryEdit = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);