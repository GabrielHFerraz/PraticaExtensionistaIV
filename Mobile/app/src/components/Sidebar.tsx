// components/Sidebar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Sidebar: React.FC<any> = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}  >
            <View style={styles.header}>
                <Text style={styles.headerText}>Menu</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    drawerContent: {
        paddingTop: 0, // Remove o espaço superior
    }
});

export default Sidebar;
