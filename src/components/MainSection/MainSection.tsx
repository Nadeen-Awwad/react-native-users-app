import useFetchUsers from '../../hooks/useFetchUsers';
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import UserCard from '../userCard/UserCard';
import { User } from '../../models/user';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './MainSectionStyle';

const MainSection = () => {

  const [query, setQuery] = useState("");
  const [isRefreshing, setRefreshing] = useState(false);

  const { data, loading, error, refetch } = useFetchUsers('https://jsonplaceholder.typicode.com/users');

  const filteredData = data.filter(user => {
    return user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.username.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase());
  });

  const handleRefresh = () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  const renderUser = ({ item }: { item: User }) => (
    <UserCard key={item.id} user={item} />
  );

  return (
    <View style={styles.upperSection}>

      <View style={styles.headerRow}>
        <Text style={styles.bTitle}>User Information</Text>
        <TouchableOpacity onPress={handleRefresh}>
          <Icon name='refresh' size={30} color='blue' />
        </TouchableOpacity></View>

      <TextInput
        placeholder='Search'
        value={query}
        style={styles.search}
        placeholderTextColor="grey"

        onChangeText={(text) => setQuery(text)}
      />
      <View style={{ flex: 1 }}>
        {loading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : error ? (
          <Text>Error: {error}</Text>
        ) : filteredData.length === 0 ? (
          <Text style={styles.noUserLable}>No User Found</Text>
        ) : (
          <FlatList
            data={filteredData}
            renderItem={renderUser}
            keyExtractor={(item) => item.id.toString()}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          />
        )}
      </View>
    </View>
  );
};


export default MainSection;
