import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, StatusBar, View, Image, TouchableOpacity } from "react-native";


const App = () => {
    const [activeTab, setActiveTab] = useState('description');
    const [requirementsTab, setRequirementsTab] = useState('minimum');
    return (
      <>
        <StatusBar barStyle="default" />
          <SafeAreaView style={styles.mainContainer}>
              <ScrollView>
                  <Image source={require('./assets/image/poster.jpg')} style={styles.poster} />
                  <View style={styles.informationContainer}>
                      <View style={styles.ois}>
                      <TouchableOpacity
                          style={[styles.buttomTab, activeTab === 'description' && styles.activeTab]}
                          onPress={() => setActiveTab('description')}
                      >
                          <Text style={styles.textTab}>Описание</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={[styles.buttomTab, activeTab === 'info' && styles.activeTab]}
                          onPress={() => setActiveTab('info')}
                      >
                          <Text style={styles.textTab}>Инфо</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={[styles.buttomTab,  activeTab === 'requirements' && styles.activeTab]}
                          onPress={() => setActiveTab('requirements')}
                      >
                          <Text style={styles.textTab}>Системные требования</Text>
                      </TouchableOpacity>
                      </View>
                      {activeTab === 'description' && (
                          <Text style={styles.textInfoContainer}>
                              Выжить — это лишь первый шаг. Resident Evil 4, настоящий гигант индустрии,
                              возрождается. Вас ждут обновленный игровой процесс, переработанный сюжет и крайне
                              детализированная графика. Вновь переживите кошмар, полностью изменивший жанр ужасов.
                          </Text>
                      )}
                      {activeTab === 'info' && (
                          <View>
                              <Text style={styles.textInfoContainer}>Оценка в Steam: Крайне положительные</Text>
                              <Text style={styles.textInfoContainer}>Дата выхода: 24/03/2020/</Text>
                              <Text style={styles.textInfoContainer}>Разработчик: CAPCOM Co., Ltd.</Text>
                              <Text style={styles.textInfoContainer}>Издатель: CAPCOM Co., Ltd.</Text>
                          </View>
                      )}
                      {activeTab === 'requirements' && (
                          <>
                              <View style={styles.requirementsTabContainer}>
                                  <TouchableOpacity
                                      style={[styles.minimunTab, requirementsTab === 'minimum' && styles.activeTab]}
                                      onPress={() => setRequirementsTab('minimum')}
                                  >
                                      <Text style={styles.textTab}>Минимальные</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                      style={[styles.minimunTab, requirementsTab === 'recommended' && styles.activeTab]}
                                      onPress={() => setRequirementsTab('recommended')}>
                                      <Text style={styles.textTab}>Рекомендуемые</Text>
                                  </TouchableOpacity>
                              </View>
                              {requirementsTab === 'minimum' && (
                                  <View>
                                      <Text style={styles.textRequiremntContainer}>ОС: Windows 10 (64 bit)</Text>
                                      <Text style={styles.textRequiremntContainer}>Процессор: AMD Ryzen 3 1200 / Intel Core
                                          i5-7500</Text>
                                      <Text style={styles.textRequiremntContainer}>Видеокарта: AMD Radeon RX 560 with 4GB VRAM /
                                          NVIDIA GeForce GTX 1050 Ti with 4GB VRAM
                                      </Text>
                                      <Text style={styles.textRequiremntContainer}>RAM: 8 GB</Text>
                                      <Text style={styles.textRequiremntContainer}>DISK: 70GB </Text>
                                  </View>
                              )}
                              {requirementsTab === 'recommended' && (
                                  <View>
                                      <Text style={styles.textRequiremntContainer}>ОС: Windows 11 (64 bit)</Text>
                                      <Text style={styles.textRequiremntContainer}>Процессор: AMD Ryzen 3 1200 / Intel Core
                                          i5-7500</Text>
                                      <Text style={styles.textRequiremntContainer}>Видеокарта: AMD Radeon RX 560 with 4GB VRAM /
                                          NVIDIA GeForce GTX 1050 Ti with 4GB VRAM
                                      </Text>
                                      <Text style={styles.textRequiremntContainer}>RAM: 8 GB</Text>
                                      <Text style={styles.textRequiremntContainer}>DISK: 70GB </Text>
                                  </View>
                              )}
                          </>
                      )}
                  </View>
                  <View style={styles.marketplacesContainer}>
                      <Text style={styles.textTitle}>Торговые площадки</Text>
                  </View>
              </ScrollView>
          </SafeAreaView>
      </>
  );
};

const styles = StyleSheet.create( {
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#121a24',
    },
    marketplacesContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        backgroundColor: '#ffffff',
        borderRadius: 35,
        minHeight: 150,
        marginTop: 25,
    },
    informationContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: "relative",
        backgroundColor: '#ffffff',
        borderRadius: 35,
        minHeight: 150,
        marginTop: -30,
        padding: 30,
    },
    ois: {
        flexDirection: 'row',
    },
    poster: {
        alignItems: 'flex-start',
        height: 230,
        width: '100%',
        resizeMode: 'cover',
    },
    textTab: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    textInfoContainer: {
        fontSize: 16,
        color: '#000000',
        marginTop: 5,
    },
    textRequiremntContainer: {
        fontSize: 16,
        color: '#000000',
        marginTop: 5,
    },
    activeTab: {
        borderBottomColor: 'blue',
    },
    buttomTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    minimunTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    requirementsTabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 2,
        padding: 5,
    },
    textTitle: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default App;
