import { useNavigate } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import { Tooltip, Alert, Typography } from '@mui/material';
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import { AddCircle, Edit, Delete } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { useConfirm } from "material-ui-confirm";

// path
import { PATH_DASHBOARD } from '../../routes/path';
//utils
import { fDate } from '../../utils/formatDate';
// slices
import { deleteCategory, deleteCategories } from '../../redux/slices/category';

const columns = [
    {
        field: 'title',
        title: 'Title',
        width: '40%'
    },
    {
        field: 'image',
        title: 'Image',
        render: row => (
            <Tooltip
                disableFocusListener
                placement='left'
                title={<img src={`${process.env.REACT_APP_IMAGE_URL}/${row.image}`} alt='' />}
            >
                <img
                    src={`${process.env.REACT_APP_IMAGE_URL}/${row.image}`}
                    alt=''
                    style={{
                        width: '80px',
                        height: '80px'
                    }}
                />
            </Tooltip>

        ),
        width: '20%'
    },
    {
        field: 'banners',
        title: 'Banners',
        render: row => (
            <Tooltip
                disableFocusListener
                placement='left'
                title={<img src={`${process.env.REACT_APP_IMAGE_URL}/${row.banners[0]}`} alt='' />}
            >
                <img
                    src={`${process.env.REACT_APP_IMAGE_URL}/${row.banners[0]}`}
                    alt=''
                    style={{
                        width: '80px',
                        height: '80px'
                    }}
                />
            </Tooltip>
        ),
        width: '20%'
    },
    {
        field: 'createdAt',
        title: 'Created At',
        width: '20%',
        render: row => (
            <Typography variant='body2'>{fDate(row.createdAt)}</Typography>
        )
    }
];

const options = {
    selection: true,
    addRowPosition: 'first',
    actionsColumnIndex: -1,
    tableLayout: 'fixed',
    exportMenu: [{
        label: 'Export PDF',
        exportFunc: (cols, datas) => ExportPdf(cols, datas, 'CategoryPdf')
    }, {
        label: 'Export CSV',
        exportFunc: (cols, datas) => ExportCsv(cols, datas, 'CategoryCsv')
    }]
    
};

const CategoryList = () => {
    const confirm = useConfirm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.category);
    const handleDelete = async _categoryID => {
        try {
            await confirm({
                title: "Are you sure to Delete this Category?",
                content: <Alert severity="error">This Category will move to recycle bin</Alert>,
                confirmationButtonProps: {
                    color: "error",
                },
            });
            dispatch(deleteCategory(_categoryID));
        } catch (error) {
            console.log(error);
        }
    };
    const handleDeleteSelected = async deleteItems => {
        try {
            await confirm({
                title: 'Are you sure to Delete selected Category?',
                content: <Alert severity='error'>Selected Category will move to recycle bin</Alert>,
                confirmationButtonProps: {
                    color: 'error'
                }
            });
            const deleteIds = deleteItems.map(item => item._id);
            dispatch(deleteCategories(deleteIds));
        } catch (error) {

        }
    }
    return (
        <MaterialTable
                    title='Categories'
                    columns={columns}
                    data={categories}
                    options={options}
                    actions={[
                        {
                            icon: () => <Edit color='warning' />,
                            tooltip: 'View and Edit',
                            onClick: (event, row) => navigate(`${PATH_DASHBOARD.category.edit}/${row.slug}`),
                            position: 'row'
                        },
                        {
                            icon: () => <Delete color='error' />,
                            tooltip: 'Delete',
                            onClick: (event, row) => handleDelete(row._id),
                            position: 'row'
                        },
                        {
                            icon: () => <AddCircle color='success' />,
                            tooltip: 'Add',
                            isFreeAction: true,
                            onClick: () => navigate(PATH_DASHBOARD.category.create)
                        },
                        {
                            icon: () => <Delete color='error' />,
                            tooltip: 'Delete all selected',
                            onClick: (evt, row) => handleDeleteSelected(row),
                        }
                    ]}
                />
    );
};

export default CategoryList;
