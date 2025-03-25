import React from 'react';
import { View, Text, TouchableOpacity,Alert } from 'react-native';
import {User} from '../../models/user';
import  styles from './UserCardStyle';

const UserCard = ({ user }:{user:User}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text><Text style={styles.label}>Email:</Text> {user.email}</Text>
      <Text><Text style={styles.label}>Phone:</Text> {user.phone}</Text>
      
      <TouchableOpacity onPress={() => Alert.alert(`Visiting ${user.website}`)}>
        <Text style={styles.link}>Website: {user.website}</Text>
      </TouchableOpacity>

      <Text style={styles.address}>
        <Text style={styles.label}>Address:</Text> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </Text>
      <Text><Text style={styles.label}>Company:</Text> {user.company.name}</Text>
    </View>
  );
};

export default UserCard;
