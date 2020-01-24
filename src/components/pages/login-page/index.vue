<template>
    <div class="login-page">
    src/components/pages/login-page/index.vue<br>    
    <router-link to="/app/regist">regist-page</router-link><br>
    
    <router-link to="/app/password-reissue">password-reissue-page</router-link><br>
    
    <router-link to="/app/project-list">project-list-page</router-link><br>
    <div id='firebaseui-auth-container'></div>
    </div>
</template>

<script>
import StyledCompo from './style';
import firebase from 'firebase/app'
import firebaseui from 'firebaseui-ja'
import 'firebaseui-ja/dist/firebaseui.css'

export default {
    name: 'LoginPage',
    props: {

    },
    components:{
        
    },
    mounted(){
        // thisを格納
        const root = this;
        // 認証設定
        const uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult) {

                    // 確認メールの有無
                    const mailFlag = authResult.user.emailVerified;
                    if (mailFlag === false) {
                        // 確認メール未時に確認メール送信
                        firebase.auth().currentUser.sendEmailVerification()
                            .then(function() {
                                alert('登録メールを送信しました。ご確認ください。');
                                // URLリロード
                                root.$router.go()
                            })
                            .catch(function(error) {
                            });
                    } else {
                        // 確認メール済時にメイン画面へ移動
                        return true;
                    }
                }
            },
            //ユーザー一覧を出さない
            credentialHelper: firebaseui.auth.CredentialHelper.NONE,
            // 認証時に同一ウィンドウで表示
            signInFlow: 'redirect',
            // ログイン後リダイレクト先
            signInSuccessUrl: '/app/project',
            // 各認証
            signInOptions: [
                // メール認証
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
                }    
            ],
            // 利用規約へリンク
            tosUrl: 'https://www.google.com/',
            // プライバシーポリシーリンク
            privacyPolicyUrl: 'https://www.google.com/'
        };

        // 認証UI表示
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }
}
</script>

