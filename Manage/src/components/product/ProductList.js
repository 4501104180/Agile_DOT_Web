import { useNavigate } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import { Tooltip, Typography, Alert } from '@mui/material';
import { AddCircle, Edit, Delete } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { useConfirm } from 'material-ui-confirm';

// slices
import { deleteProduct, deleteProducts } from '../../redux/slices/product';
// path
import { PATH_DASHBOARD } from '../../routes/path'
// utils
import { toVND } from '../../utils/formatMoney';

const columns = [
    {
        field: 'name',
        title: 'Name',
        width: '40%'
    },
    {
        field: 'image',
        title: 'Image',
        width: '30%',
        render: row => (
            <Tooltip
                disableFocusListener
                placement='left'
                title={<img src={`${process.env.REACT_APP_IMAGE_URL}/${row.images[0]}`} alt={row.name} />}
            >
                <img
                    src={`${process.env.REACT_APP_IMAGE_URL}/${row.images[0]}`}
                    alt={row.name}
                    style={{
                        width: '80px',
                        height: '80px'
                    }}
                />
            </Tooltip>
        )
    },
    {
        field: 'price',
        title: 'Price',
        width: '15%',
        render: row => (
            <Typography variant='body2'>{toVND(row.price)}</Typography>
        )
    },
    {
        field: 'quantity',
        title: 'Quantity',
        width: '15%'
    }
];

const options = {
    selection: true,
    addRowPosition: 'first',
    actionsColumnIndex: -1,
    tableLayout: 'fixed',
    exportMenu: [{
        label: 'Export PDF',
        exportFunc: (cols, datas) => ExportPdf(cols, datas, 'ProductPdf')
    }, {
        label: 'Export CSV',
        exportFunc: (cols, datas) => ExportCsv(cols, datas, 'ProductCsv')
    }]
};

const ProductList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const confirm = useConfirm();
    const { products } = useSelector(state => state.product);
    const handleDelete = async productId => {
        try {
            await confirm({
                title: 'Are you sure you wanna remove this product?',
                content: <Alert severity='error'>The product after deletion will be saved to the trash!</Alert>,
                confirmationButtonProps: {
                    color: 'error'
                }
            });
            dispatch(deleteProduct(productId));
        } catch (error) {

        }
    };
    const handleDeleteSelected = async deleteItems => {
        try {
            await confirm({
                title: 'Are you sure you wanna remove these products?',
                content: <Alert severity='error'>The products after deletion will be saved to the trash!</Alert>,
                confirmationButtonProps: {
                    color: 'error'
                }
            });
            const deleteIds = deleteItems.map(item => item._id);
            dispatch(deleteProducts(deleteIds));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <MaterialTable
            title='Products'
            columns={columns}
            data={products}
            options={options}
            actions={[
                {
                    icon: () => <Edit color='warning' />,
                    tooltip: 'View and Edit',
                    onClick: (event, row) => navigate(`${PATH_DASHBOARD.product.edit}/${row.slug}`),
                    position: 'row'
                },
                {
                    icon: () => <Delete color='error' />,
                    tooltip: 'Delete',
                    onClick: (event, row) => handleDelete(row._id),
                    position: 'row'
                },
                {
                    icon: () => <Delete color='error' />,
                    tooltip: 'Delete all selected',
                    onClick: (evt, row) => handleDeleteSelected(row)
                },
                {
                    icon: () => <AddCircle color='success' />,
                    tooltip: 'Add',
                    isFreeAction: true,
                    onClick: () => navigate(PATH_DASHBOARD.product.create)
                },
            ]}
        />
    );
};

export default ProductList;
