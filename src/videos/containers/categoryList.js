import React, { Component } from 'react';
import { View, FlatList, } from 'react-native';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontalSeparator';
import Category from '../components/category';
import Layout from '../components/categoryListLayout';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        list: state.categoryList
    }
}

class CategoryList extends Component {
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text='No hay sugerencias :(' />
    itemSeparator = () => <Separator />
    renderItem = ({item}) => {
        return(
            <Category {...item} />
        )
    }
    render() {
        return(
            <View title='Categorias'>
                <Layout>
                    <FlatList
                        horizontal={true}
                        keyExtractor={this.keyExtractor} 
                        data={this.props.list}
                        ListEmptyComponent={this.renderEmpty}
                        ItemSeparatorComponent={this.itemSeparator}
                        renderItem={this.renderItem}
                    />
                </Layout>
            </View>
        )
    }
}

export default connect(mapStateToProps)(CategoryList);