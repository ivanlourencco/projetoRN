import React, {useEffect, useState} from 'react';
import {Button, View} from 'react-native';
import {MainStack} from '../navigation/MainStack';

const Data = ({navigation}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Chamada na API
  }, []);

  return (
    <View>
      {/* https://reactnative.dev/docs/flatlist */}
      {/* FlatList data={Object keys de data} render={Renderizar os botões} />  */}

      <Button
        title="Navegar para List"
        // https://reactnavigation.org/docs/params/#passing-params-to-nested-navigators
        // Vai passar os dados que estarão na chave deste botão no objeto data
        onPress={() => navigation.navigate(MainStack.LIST, {data: null})}
      />
    </View>
  );
};

export default Data;
