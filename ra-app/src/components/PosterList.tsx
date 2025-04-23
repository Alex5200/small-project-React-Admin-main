import { Datagrid, List, NumberField, ReferenceField, TextField , ImageField, useRecordContext, EditButton } from 'react-admin';
import {PosterFilterSidebar} from "./FilterList"

const UrlField = ({source}: {source: string}) =>{
    const record = useRecordContext()
    if(!record) return null
    return <a href={record[source]} target='_blank'>{record[source].replace("http://localhost:4000/posters" , "") }</a>
}

export const PosterList = () => (
    <List aside={<PosterFilterSidebar/>}>
        <p className='headers'>Эко Сознание</p>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="category_id" reference="categories" >
                <TextField source='name'/>
            </ReferenceField>
            <TextField source="title" />
            <NumberField source="width" />
            <NumberField source="height" />
            <NumberField source="price" />
            <ImageField source="thumbnail"  title="title" sx = {{
                "& img": {maxWidth: 50 +"vh", maxHeight: 50 +"vh", objectFit: "contain"}
            }} />
            <UrlField source="image" />
            <TextField source="description" />
            <NumberField source="stock" />
            <NumberField source="sales" />
            <EditButton/>
        </Datagrid>
    </List>
);