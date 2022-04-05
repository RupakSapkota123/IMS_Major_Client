/* eslint-disable no-multiple-empty-lines */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
// import svg icon form ../../../../Assets/Icons/Close.svg

import React from 'react';
// import Close from '../../../../Assets/Icons/Close.svg';
import { Chip } from '@mui/material';
import { Item, Divider, Heading } from '../../Themes/utilityThemes';
import { DataGrid } from '@mui/x-data-grid';
import Icon from 'Assets/Icons/Icon';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useLocation } from 'react-router';

import styled from 'styled-components';
import ProductsContainer from 'Components/shared/ProductsContainer';

interface ChipData {
  key: any;
  label: any;
}

export const Grid = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'body';

  grid-template-rows: auto auto fill-content;

  margin: var(--spacing-15) var(--spacing-15);
`;

const Wrapper = styled.div`
  /* overflow: hidden; */
  display: flex;
  gap: 55px;
  width: 100%;
  /* max-width: 400px; */
  max-width: 500px;
  min-height: fit-content;
`;

const Header = styled.header`
  grid-area: header;
  grid-row: span 1;
  margin: var(--spacing-5) 0;
`;

const Content = styled.section`
  grid-area: content;
`;

const Body = styled.section`
  grid-area: body;
  margin: var(--spacing-5) 0;
`;

const Headings = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
`;

const Data = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
`;

const ColorWrapper = styled.div`
  /* display: flex; */
`;

const Colors = styled(motion.div).attrs({})`
  scroll-behavior: smooth;
  scroll-snap-type: proximity;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  min-height: 0px;
  max-height: 70px;
  min-width: 47rem;
  max-width: 65rem;
`;

const ProductDetails = () => {
  const location = useLocation();
  const [productDetails, setProductDetails] = React.useState<any>({});
  // @ts-ignore
  const ids = location && location.state && location.state.row;

  const [chipData, setChipData] = React.useState<readonly ChipData[]>([]);

  const handleDelete = (chipToDelete: ChipData) => {
    return () => {
      setChipData((chips) => {
        return chips.filter((chip) => {
          return chip.key !== chipToDelete.key;
        });
      });
    };
  };

  const [unit, setUnit] = React.useState<any[]>([]);

  React.useEffect(() => {
    setUnit([ids]);
  }, [ids]);

  console.log('unit', unit);
  console.log(
    'idss',
    ids.products.map((item: any) => item.SalesInformation)
  );

  const Sales = ids.products.map((item: any) => item.SalesInformation);

  // loop through the sales and get the  sellingPrice
  const sellingPrice = Sales.map((item: any) =>
    item.filter((i: any) => i !== Boolean)
  );
  console.log('sellingPrice', sellingPrice);

  // loop through the array
  // for (let i = 0; i < unit.length; i++) {
  //   // check if the item is already in the array
  //   if (unit[i].id === ids.id) {
  //     // item found, return true
  //     return true;
  //   }
  // }

  // item not found, return false
  // return false;

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 5
    },
    {
      field: 'name',
      headerName: 'ITEMS SUMMARY',
      width: 200
    },
    {
      field: 'sellingPrice',
      headerName: 'SELLING PRICE',
      width: 200
    },
    {
      field: 'costPrice',
      headerName: ' COST PRICE',
      width: 200
    },
    {
      field: 'date',
      headerName: 'DATE',
      width: 200
    }
  ];

  return (
    <ProductsContainer>
      <Grid>
        <Header>
          <Heading>{ids.name}</Heading>
          <Item height="1%">{ids.name} Item(s)</Item>
        </Header>
        <Content>
          <Wrapper>
            <Headings>
              <Item height="1%">brand</Item>
              <Item height="1%">{ids.name}</Item>
            </Headings>
            <Data>
              <Item height="1%">{ids.name}</Item>
              <Item height="1%">
                <ColorWrapper>
                  <Colors>
                    {chipData.map((data) => {
                      // let icon;
                      return (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 0.5 }}
                          whileTap={{ scale: 0.9 }}>
                          <Chip
                            color="primary"
                            icon={Icon.Close}
                            label={data.label}
                            onDelete={
                              data.label === 'React'
                                ? undefined
                                : handleDelete(data)
                            }
                            size="small"
                            sx={{
                              backgroundColor: 'var(--color-secondary)',
                              borderRadius: '7px'
                            }}
                          />
                        </motion.div>
                      );
                    })}
                  </Colors>
                </ColorWrapper>
              </Item>
            </Data>
          </Wrapper>
          <Divider />
        </Content>
        <Body>
          <div style={{ margin: '10px 0', height: '66vh', width: '100%' }}>
            <div style={{ height: '66vh', width: '100%' }}>
              <DataGrid
                columns={columns}
                density="compact"
                // eslint-disable-next-line no-underscore-dangle
                getRowId={(data: any) => data.id}
                loading={false}
                rows={unit}
                sx={{
                  border: 'none'
                }}
              />
            </div>
          </div>
        </Body>
      </Grid>
    </ProductsContainer>
  );
};

export default ProductDetails;








































































































































