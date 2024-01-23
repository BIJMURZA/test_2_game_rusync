import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

type market = {
  market: string;
  price: string[];
};

const App = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [requirementsTab, setRequirementsTab] = useState('minimum');
  const [activeMarketplaceTab, setActiveMarketplaceTab] = useState('whenIplay');
  const aid = '2050650';
  const [markets, setMarkets] = useState<market[]>([]);

  useEffect(() => {
    fetch(`http://192.168.0.117:3000/${aid}`)
      .then(response => response.json())
      .then(data => {
        setMarkets(data);
      })
      .catch(error => console.error(error));
  }, []);

  const hadPress = () => {
    const url =
      'https://play.geforcenow.com/games?game-id=4ac47546-4023-4ae7-98d1-60c98c9db752';
    Linking.openURL(url).catch(error => console.error(error));
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <Image
            source={require('./assets/image/poster.jpg')}
            style={styles.poster}
          />
          <View style={styles.informationContainer}>
            <View style={styles.ois}>
              <TouchableOpacity
                style={[
                  styles.buttomTab,
                  activeTab === 'description' && styles.activeTab,
                ]}
                onPress={() => setActiveTab('description')}>
                <Text style={styles.textTab}>Описание</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttomTab,
                  activeTab === 'info' && styles.activeTab,
                ]}
                onPress={() => setActiveTab('info')}>
                <Text style={styles.textTab}>Инфо</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttomTab,
                  activeTab === 'requirements' && styles.activeTab,
                ]}
                onPress={() => setActiveTab('requirements')}>
                <Text style={styles.textTab}>Системные требования</Text>
              </TouchableOpacity>
            </View>
            {activeTab === 'description' && (
              <Text style={styles.textInfoContainer}>
                Выжить — это лишь первый шаг. Resident Evil 4, настоящий гигант
                индустрии, возрождается. Вас ждут обновленный игровой процесс,
                переработанный сюжет и крайне детализированная графика. Вновь
                переживите кошмар, полностью изменивший жанр ужасов.
              </Text>
            )}
            {activeTab === 'info' && (
              <View>
                <Text style={styles.textInfoContainer}>
                  Оценка в Steam: Крайне положительные
                </Text>
                <Text style={styles.textInfoContainer}>
                  Дата выхода: 24/03/2020/
                </Text>
                <Text style={styles.textInfoContainer}>
                  Разработчик: CAPCOM Co., Ltd.
                </Text>
                <Text style={styles.textInfoContainer}>
                  Издатель: CAPCOM Co., Ltd.
                </Text>
              </View>
            )}
            {activeTab === 'requirements' && (
              <>
                <View style={styles.requirementsTabContainer}>
                  <TouchableOpacity
                    style={[
                      styles.minimunTab,
                      requirementsTab === 'minimum' && styles.activeTab,
                    ]}
                    onPress={() => setRequirementsTab('minimum')}>
                    <Text style={styles.textTab}>Минимальные</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.minimunTab,
                      requirementsTab === 'recommended' && styles.activeTab,
                    ]}
                    onPress={() => setRequirementsTab('recommended')}>
                    <Text style={styles.textTab}>Рекомендуемые</Text>
                  </TouchableOpacity>
                </View>
                {requirementsTab === 'minimum' && (
                  <View>
                    <Text style={styles.textRequiremntContainer}>
                      ОС: Windows 10 (64 bit)
                    </Text>
                    <Text style={styles.textRequiremntContainer}>
                      Процессор: AMD Ryzen 3 1200 / Intel Core i5-7500
                    </Text>
                    <Text style={styles.textRequiremntContainer}>
                      Видеокарта: AMD Radeon RX 560 with 4GB VRAM / NVIDIA
                      GeForce GTX 1050 Ti with 4GB VRAM
                    </Text>
                    <Text style={styles.textRequiremntContainer}>
                      RAM: 8 GB
                    </Text>
                    <Text style={styles.textRequiremntContainer}>
                      DISK: 70GB{' '}
                    </Text>
                  </View>
                )}
                {requirementsTab === 'recommended' && (
                  <View>
                    <Text style={styles.textRequiremntContainer}>
                      ОС: Windows 11 (64 bit)
                    </Text>
                    <Text style={styles.textRequiremntContainer}>
                      Процессор: AMD Ryzen 3 1200 / Intel Core i5-7500
                    </Text>
                    <Text style={styles.textRequiremntContainer}>
                      Видеокарта: AMD Radeon RX 560 with 4GB VRAM / NVIDIA
                      GeForce GTX 1050 Ti with 4GB VRAM
                    </Text>
                    <Text style={styles.textRequiremntContainer}>
                      RAM: 8 GB
                    </Text>
                    <Text style={styles.textRequiremntContainer}>
                      DISK: 70GB{' '}
                    </Text>
                  </View>
                )}
              </>
            )}
          </View>
          <View style={styles.marketplacesContainer}>
            <View style={styles.marketplaceHeader}>
              <TouchableOpacity
                style={[
                  styles.buttomTab,
                  activeMarketplaceTab === 'whenIbuy?' && styles.activeTab,
                ]}
                onPress={() => setActiveMarketplaceTab('whenIbuy?')}>
                <Text style={styles.textTitle}> Где купить? </Text>
              </TouchableOpacity>
              <Text style={styles.textTitle}> / </Text>
              <TouchableOpacity
                style={[
                  styles.buttomTab,
                  activeMarketplaceTab === 'whenIplay?' && styles.activeTab,
                ]}
                onPress={() => setActiveMarketplaceTab('whenIplay?')}>
                <Text style={styles.textTitle}> Где сыграть? </Text>
              </TouchableOpacity>
            </View>
            {activeMarketplaceTab === 'whenIplay?' && (
              <View>
                <View style={styles.marketplaceContainer}>
                  <Image
                    source={require('./assets/image/geforce_now.png')}
                    style={styles.imageGaming}
                  />
                  <TouchableOpacity
                    style={styles.playButton}
                    onPress={hadPress}>
                    <Text style={styles.playButtonText}>Играть</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.marketplaceContainer}>
                  <Image
                    source={require('./assets/image/vk_play.png')}
                    style={styles.imageGaming}
                  />
                  <TouchableOpacity style={styles.playButton}>
                    <Text style={styles.playButtonText}>Играть</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.marketplaceContainer}>
                  <Text>RUSYNC </Text>
                  <TouchableOpacity style={styles.playButton}>
                    <Text style={styles.playButtonText}>Играть</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {activeMarketplaceTab === 'whenIbuy?' && (
              <View>
                <View style={styles.marketplaceContainer}>
                  <Image
                    source={require('./assets/image/gabestore.png')}
                    style={styles.imageMarketplace}
                  />
                  <View style={styles.textPriceContainer}>
                    {markets.map((item, index) => (
                      <View key={index}>
                        {item.market === 'gabestore' &&
                          !item.price.includes('Нет в наличии') && (
                            <Text style={styles.textPrice}>{item.price} ₽</Text>
                          )}
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity
                    style={styles.playButton}
                    onPress={hadPress}>
                    <Text style={styles.playButtonText}>Купить</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.marketplaceContainer}>
                  <Image
                    source={require('./assets/image/game_mag.png')}
                    style={styles.imageMarketplace}
                  />
                  <View style={styles.textPriceContainer}>
                    {markets.map((item, index) => (
                      <View key={index}>
                        {item.market === 'game_mag' && (
                          <Text style={styles.textPrice}>{item.price} ₽</Text>
                        )}
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity
                    style={styles.playButton}
                    onPress={hadPress}>
                    <Text style={styles.playButtonText}>Купить</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.marketplaceContainer}>
                  <Image
                    source={require('./assets/image/gamerz.png')}
                    style={styles.imageMarketplace}
                  />
                  <View style={styles.textPriceContainer}>
                    {markets.map((item, index) => (
                      <View key={index}>
                        {item.market === 'gamerz' && (
                          <Text style={styles.textPrice}>{item.price} ₽</Text>
                        )}
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity
                    style={styles.playButton}
                    onPress={hadPress}>
                    <Text style={styles.playButtonText}>Купить</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.marketplaceContainer}>
                  <Image
                    source={require('./assets/image/steam.png')}
                    style={styles.imageMarketplace}
                  />
                  <View style={styles.textPriceContainer}>
                    {markets.map((item, index) => (
                      <View key={index}>
                        {item.market === 'steam' &&
                          !item.price.includes('Нет в наличии') && (
                            <Text style={styles.textPrice}>{item.price} ₽</Text>
                          )}
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity
                    style={styles.playButton}
                    onPress={hadPress}>
                    <Text style={styles.playButtonText}>Купить</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.marketplaceContainer}>
                  <Image
                    source={require('./assets/image/steampay.png')}
                    style={styles.imageMarketplace}
                  />
                  <View style={styles.textPriceContainer}>
                    {markets.map((item, index) => (
                      <View key={index}>
                        {item.market === 'steampay' && (
                          <Text style={styles.textPrice}>{item.price} ₽</Text>
                        )}
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity
                    style={styles.playButton}
                    onPress={hadPress}>
                    <Text style={styles.playButtonText}>Купить</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.marketplaceContainer}>
                  <Image
                    source={require('./assets/image/steambuy.png')}
                    style={styles.imageMarketplace}
                  />
                  <View style={styles.textPriceContainer}>
                    {markets.map((item, index) => (
                      <View key={index}>
                        {item.market === 'steambuy' && (
                          <Text style={styles.textPrice}>{item.price} ₽</Text>
                        )}
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity
                    style={styles.playButton}
                    onPress={hadPress}>
                    <Text style={styles.playButtonText}>Купить</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.marketplaceContainer}>
                  <Image
                    source={require('./assets/image/zakazaka.png')}
                    style={styles.imageMarketplace}
                  />
                  <View style={styles.textPriceContainer}>
                    {markets.map((item, index) => (
                      <View key={index}>
                        {item.market === 'zaka_zaka' && (
                          <Text style={styles.textPrice}>{item.price} ₽</Text>
                        )}
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity
                    style={styles.playButton}
                    onPress={hadPress}>
                    <Text style={styles.playButtonText}>Купить</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#c0c0c0',
  },
  marketplacesContainer: {
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#ebebeb',
    borderRadius: 35,
    minHeight: 250,
    marginTop: 25,
    padding: 30,
  },
  informationContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: '#ebebeb',
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
    marginTop: 0,
  },
  imageGaming: {
    height: 50,
    width: 115,
    resizeMode: 'contain',
    marginTop: 5,
    marginBottom: 5,
  },
  imageMarketplace: {
    height: 50,
    width: 115,
    resizeMode: 'contain',
    marginTop: 5,
    marginBottom: 5,
  },
  marketplaceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#c0c0c0',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 7,
  },
  playButton: {
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 2,
    elevation: 7,
    width: 90,
    height: 35,
    marginBottom: 5,
  },
  playButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  marketplaceHeader: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  imageBombisti: {
    alignItems: 'center',
    height: 250,
    width: 350,
    resizeMode: 'contain',
    marginTop: 5,
    marginBottom: 5,
  },
  textBombisti: {
    marginTop: 5,
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  textPrice: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  textPriceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
});

export default App;
