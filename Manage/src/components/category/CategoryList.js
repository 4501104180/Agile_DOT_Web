import { useNavigate } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import { Tooltip, Chip } from '@mui/material';
import { AddCircle, Edit, Delete } from '@mui/icons-material';

// path
import { PATH_DASHBOARD } from '../../routes/path';

const columns = [
    {
        field: 'title',
        title: 'Title',
        width: '50%'
    },
    {
        field: 'image',
        title: 'Image',
        render: row => (
            <Tooltip
                disableFocusListener
                placement='left'
                title={<img src={row.image} alt='' />}
            >
                <img
                    src={row.image}
                    alt=''
                    style={{
                        width: '80px',
                        height: '80px'
                    }}
                />
            </Tooltip>
        )
    },
    {
        field: 'banners',
        title: 'Banners',
        render: row => (
            <Tooltip
                disableFocusListener
                placement='left'
                title={<img src={row.banners} alt='' />}
            >
                <img
                    src={row.banners}
                    alt=''
                    style={{
                        width: '80px',
                        height: '80px'
                    }}
                />
            </Tooltip>
        )
    },
    {
        field: 'status',
        title: 'Status',
        width: '20%',
        render: row => (
            <Chip
                color={row.status === 'active' ? 'success' : 'error'}
                label={row.status}
            />
        )
    }
];

const rows = [
    {
        id: '1',
        title: 'Laptop - Máy Vi Tính - Linh kiện',
        image: 'https://salt.tikicdn.com/cache/w100/ts/product/78/83/23/7cad758fc5e8fd666e7be6f042860535.jpg.webp',
        parentId: 'null',
        displayOrder: '1',
        banners: 'https://salt.tikicdn.com/cache/w1080/ts/banner/43/c9/be/c23ea0e530faf73fa58ba0f3cb042d52.jpg.webp',
        status: 'block',
        slug: 'laptop-may-vi-tinh-linh-kien'        
    },
    {
        id: '2',
        title: 'Điện thoại và máy tính bảng',
        image: 'https://salt.tikicdn.com/cache/w100/ts/product/b3/95/fc/70f6724a71608f645d6435ebf5e0039b.jpg.webp',
        parentId: 'null',
        displayOrder: '2',
        banners: 'https://salt.tikicdn.com/cache/w1080/ts/banner/11/79/05/aac4c754d640928b776cbf22e9dc29b5.jpg.webp',
        status: 'active',
        slug: 'dien-thoai-va-may-tinh-bang'        
    },
    {
        id: '3',
        title: 'Laptop',
        image: 'https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn',
        parentId: '1',
        displayOrder: '1',
        banners: 'https://salt.tikicdn.com/cache/w1080/ts/banner/43/c9/be/c23ea0e530faf73fa58ba0f3cb042d52.jpg.webp',
        status: 'active',
        slug: 'laptop'        
    },
    {
        id: '4',
        title: 'Laptop gaming',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZkGLl_Lclvm2uEJEdNOeiv-JdZ_-zV4gPA&usqp=CAU',
        parentId: '3',
        displayOrder: '2',
        banners: '',
        status: 'active',
        slug: 'laptop-gaming'        
    },
    {
        id: '5',
        title: 'Laptop truyền thống',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuI_yDVZp_dNbt3OOHV1QNs4f6mBHxKLzJQ&usqp=CAU',
        parentId: '3',
        displayOrder: '1',
        banners: '',
        status: 'active',
        slug: 'laptop-truyen-thong'        
    },
    {
        id: '6',
        title: 'Macbook',
        image: 'https://salt.tikicdn.com/cache/w100/ts/product/78/83/23/7cad758fc5e8fd666e7be6f042860535.jpg.webp',
        parentId: 'null',
        displayOrder: '1',
        banners: 'https://salt.tikicdn.com/cache/w1080/ts/banner/43/c9/be/c23ea0e530faf73fa58ba0f3cb042d52.jpg.webp',
        status: 'active',
        slug: 'macbook'        
    },

];

const options = {
    selection: true,
    addRowPosition: 'first',
    actionsColumnIndex: -1,
    tableLayout: 'fixed'
};

const CategoryList = () => {
    const navigate = useNavigate();
    return (
        <MaterialTable
            title='Categories'
            columns={columns}
            data={rows}
            options={options}
            actions={[
                {
                    icon: () => <Edit color='warning' />,
                    tooltip: 'View and Edit',
                    onClick: (event, row) => navigate(`/category/${row.slug}`),
                    position: 'row'
                },
                {
                    icon: () => <Delete color='error' />,
                    tooltip: 'Delete',
                    onClick: (event, rowData) => alert("You want to delete " + rowData.name),
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
                    tooltip: 'Delete selected',
                    onClick: (evt, data) => alert('Are you sure delete ?')
                }
            ]}
        />
    );
};

export default CategoryList;
