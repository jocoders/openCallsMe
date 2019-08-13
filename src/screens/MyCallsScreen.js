import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ContactItem, ModalContactCard, ProjectStatusBar, SearchBar } from '../components'
import { WP, HP } from '../constants'
import { contactData } from '../draftData'

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'rgba(196, 196, 196, 0.17)',
    borderWidth: WP('0.2%'),
    borderColor: 'rgba(196, 196, 196, 0.25)',
    height: HP('0.4%'),
    width: '100%'
  },
  container: {
    flex: 1
  },
  date: {
    color: '#4F4F4F',
    fontFamily: 'Roboto',
    fontSize: HP('2.4%'),
    left: WP('4.5%')
  },
  dateContainer: {
    backgroundColor: 'rgba(196, 196, 196, 0.17)',
    height: HP('6%'),
    justifyContent: 'center',
    width: WP('100%')
  }
})

const MyCallsScreen = () => {
  const { block, container, date, dateContainer } = styles
  const [searchValue, setSearchValue] = useState(null)
  const [dateBar, setDatebar] = useState('February, 2017')
  const [callDuration, setCallDuration] = useState(1)
  const [modalVisible, setModalVisible] = useState(false)
  const changeTextHandler = value => {
    setSearchValue(value)
  }
  const changeCallHandler = value => {
    setCallDuration(value)
  }
  const modalVisibleHandler = () => {
    modalVisible ? setModalVisible(false) : setModalVisible(true)
  }
  const renderSeparator = () => (
    <View
      style={{
        height: HP('0.2%'),
        width: '100%',
        backgroundColor: 'rgba(196, 196, 196, 0.17)'
      }}
    />
  )

  return (
    <View style={container}>
      <ProjectStatusBar backgroundColor="#005C24" barStyle="light-content" />
      <SearchBar onChangeText={changeTextHandler} value={searchValue} />
      <View style={dateContainer}>
        <Text style={date}>{dateBar}</Text>
      </View>
      <View style={block} />
      <FlatList
        autoCorrect={false}
        data={contactData}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        keyExtractor={item => item.phone}
        renderItem={({ item }) => (
          <ContactItem
            avatar={item.avatar}
            date={item.date}
            name={item.name}
            phone={item.phone}
            onPress={modalVisibleHandler}
          />
        )}
        ItemSeparatorComponent={renderSeparator}
      />
      <ModalContactCard
        callDuration={callDuration}
        changeCallDuration={changeCallHandler}
        onModalPress={modalVisibleHandler}
        modalVisible={modalVisible}
      />
    </View>
  )
}

export { MyCallsScreen }
