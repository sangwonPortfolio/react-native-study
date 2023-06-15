import React from 'react';
import {SafeAreaView, Text, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../common/CustomButton';

const LoginScreen = ({navigation}) => {
  const sampleId = 'rngus3698'; // 테스트용 id
  const samplePassword = '123123'; // 테스트용 password

  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errMessage, setErrMessage] = React.useState(''); // 로그인 실패 시 안내 메세지

  const idInputRef = React.useRef();
  const passwordInputRef = React.useRef();

  // 로그인 버튼 클릭 시
  const loginBtnOnPress = () => {
    if (id !== sampleId) {
      setErrMessage('아이디가 일치하지 않습니다.');
      idInputRef.current.focus();
    } else if (password !== samplePassword) {
      setErrMessage('비밀번호가 일치하지 않습니다.');
      passwordInputRef.current.focus();
    } else {
      navigation.reset({routes: [{name: 'Home'}]}); // 스택을 초기화 후 페이지 이동 ex) 로그인, 회원가입, 결제 등
    }
  };

  return (
    <SafeAreaView style={styles.SafeAreaViewArea}>
      <TextInput
        style={styles.id_input}
        value={id}
        placeholder={'아이디'}
        onChangeText={e => setId(e)}
        returnKeyType={'next'} //  완료대신 다음
        onSubmitEditing={() => passwordInputRef.current.focus()} // 다음 버튼 클릭시 비밀번호 input으로 focus 이동
        blurOnSubmit={false}
        ref={idInputRef}
      />
      <TextInput
        style={styles.id_input}
        value={password}
        secureTextEntry={true}
        placeholder={'비밀번호'}
        onChangeText={e => setPassword(e)}
        ref={passwordInputRef}
      />
      {errMessage.length > 0 && (
        <Text style={styles.errMessage}>{errMessage}</Text>
      )}
      <CustomButton
        title={'로그인'}
        buttonColor={'#4BA6FF'}
        titleColor={'#FFFFFF'}
        onPress={() => loginBtnOnPress()}
        ref={passwordInputRef}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewArea: {
    width: '100%',
    alignItems: 'center',
  },
  id_input: {
    width: '80%',
    height: 50,
    fontSize: 20,
    backgroundColor: 'white',
    marginTop: '5%',
    borderRadius: 10,
    padding: 10,
    borderColor: '#4BA6FF',
    borderWidth: 1,
  },
  login_btn: {
    width: '10%',
    height: '5px',
    marginTop: '10%',
    backgroundColor: 'blue',
  },
  errMessage: {
    marginTop: 20,
    color: 'red',
  },
});

export default LoginScreen;
