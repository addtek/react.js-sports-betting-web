// import * as lang from '../../lang.json';
const lang ={
    "fra": {
      "Prematch": "Pre-match",
      "Live": "Live",
      "Home": "Accueil",
      "Create Account": "Create Account",
      "Sign In": "Connexion",
      "sign in": "Connexion",
      "Register": "S inscrire",
      "Registration": "S inscrire",
      "Upcoming": "Match à venir",
      "More": "Voir plus",
      "Live now": "match en cours",
      "First Name": "Prenom",
      "Name": "Nom",
      "Email": "Email",
      "Phone": "Telephone",
      "Password": "Mot de passe",
      "Re-type Password": "Retaper le mot de passe",
      "CREATE ACCOUNT": "CREER MON COMPTE",
      "Already have an account?": "Vous avez deja un compte?",
      "LOGIN": "Connectez vous",
      "Login": "S'identifier",
      "Forget": "Oublier",
      "Profile": "Mon Profil",
      "Bets History": "Historique de paris",
      "Deposit": "Depot",
      "Withdrawal": "Retrait",
      "Transaction": "Transaction",
      "Change password": "Changer le mot de passe",
      "Log out": "Se deconnecter",
      "Main Balance": "Solde Principal",
      "Bonus Balance": "Solde de Bonus",
      "Edit profile": "Modifier mon profil",
      "Change Password": "Changer le mot de passe",
      "Phone number": "Numero de telephone",
      "Nickname": "Pseudo",
      "Gender": "Genre",
      "Don't specify": "Ne pas specifier",
      "Male": "Male",
      "Female": "Femelle",
      "ID Type": "Type de piece",
      "Passport": "Passport",
      "Drive license": "Permis de conduire",
      "Other": "Autres",
      "Firearms license": "Carte d identite",
      "ID Card Number": "Numero de la carte",
      "Date of Birth": "Date de Naissance",
      "SUBMIT": "Valider",
      "Old Password": "Mot de passe",
      "New Password": "Nouveau mot de passe",
      "Confirm New Password": "Confirmer le mot de passe",
      "Wrong Password": "Mauvais mot de passe",
      "Wallet": "Mon compte",
      "Help": "Aide",
      "Balance History": "Historique du solde",
      "Processing Time": "Temps de traitement",
      "Fee": "Frais",
      "Deposit amount": "Montant du depot",
      "Amount to be deposited": "Montant a deposer",
      "Total Amount": "Montant total",
      "Amount": "Montant",
      "Enter Number": "Entrer Numero",
      "DEPOSIT": "DEPOT",
      "All": "Tout",
      "Open": "Ouvert",
      "Won": "Gagner",
      "Lost": "Perdu",
      "Returned": "Rembourser",
      "Bet ID": "ID de paris",
      "Bet Type": "Type de paris",
      "Time Period": "Periode de temps",
      "Date range": "Date",
      "Stake": "Mise",
      "Odds": "Cote",
      "Win": "Gain",
      "Forget password": "Mot de passe oublié",
      "Game Results": "Résultats du jeu",
      "Start Time": "Heure de debut",
      "1st Half": "1er Mi temps",
      "Half Time": "Mis-temps",
      "in": "dans",
      "In-Play": "Jeu en cours",
      "Sports": "DES SPORTS",
      "Last Name": "Nom de famille",
      "First Name": "Prénom",
      "Password": "Mot de passe",
      "Phone" : "Téléphone",
      "Re-type Password" :"Confirmez le mot de passe",
      "Create Account": "Créer un compte",
      "Already have an account":"Vous avez déjà un compte",
      "I agree to all": "Je suis d'accord avec tout",
      "Terms": "termes",
      "Conditions":"Conditions",
      "Privacy Policy":"Politique de confidentialité",
      "and I am over 18 years of age":"et j'ai plus de 18 ans"

    },
    "eng": {
      "Prematch": "Pre-match",
      "Live": "Live",
      "Home": "Home",
      "Sign in": "Sign in",
      "Register": "Register",
      "Upcoming": "Upcoming",
      "More": "More",
      "Live now": "Live now",
      "First Name": "First Name",
      "Name": "Name",
      "Email": "Email",
      "Phone": "Phone",
      "Password": "Password",
      "Re-type Password": "Re-type Password",
      "CREATE ACCOUNT": "CREATE ACCOUNT",
      "Already have an account?": "Already have an account?",
      "LOGIN": "LOGIN",
      "Forget": "Forget",
      "Profile": "Profile",
      "Bets History": "Bets History",
      "Deposit": "Deposit",
      "Withdrawal": "Withdrawal",
      "Transaction": "Transaction",
      "Change password": "Change password",
      "Log out": "Log out",
      "Main Balance": "Main Balance",
      "Bonus Balance": "Bonus Balance",
      "Edit profile": "Edit profile",
      "Change Password": "Change Password",
      "Phone number": "Phone number",
      "Nickname": "Nickname",
      "Gender": "Gender",
      "Don't specify": "Don't specify",
      "Male": "Male",
      "Female": "Female",
      "ID Type": "ID Type",
      "Passport": "Passport",
      "Drive license": "Drive license",
      "Other": "Other",
      "Firearms license": "Firearms license",
      "ID Card Number": "ID Card Number",
      "Date of Birth": "Date of Birth",
      "SUBMIT": "SUBMIT",
      "Old Password": "Old Password",
      "New Password": "New Password",
      "Confirm New Password": "Confirm New Password",
      "Wrong Password": "Wrong Password",
      "Wallet": "Wallet",
      "Help": "Help",
      "Balance History": "Balance History",
      "Processing Time": "Processing Time",
      "Fee": "Fee",
      "Deposit amount": "Deposit amount",
      "Amount to be deposited": "Amount to be deposited",
      "Total Amount": "Total Amount",
      "Amount": "Amount",
      "Enter Number": "Enter Number",
      "DEPOSIT": "DEPOSIT",
      "All": "All",
      "Open": "Open",
      "Won": "Won",
      "Lost": "Lost",
      "Returned": "Returned",
      "Bet ID": "Bet ID",
      "Bet Type": "Bet Type",
      "Time Period": "Time Period",
      "Date range": "Date range",
      "Stake": "Stake",
      "Odds": "Odds",
      "Win": "Win",
      "Start Time": "Start Time",
      "1st Half": "1st Half",
      "Half Time": "Half Time",
      "in": "in",
      "In Play": "In Play"
    }
  }
  
export default function Lang({user_lang,word}) { 
    console.log(lang[user_lang])
    return lang[user_lang] !== void 0 && lang[user_lang][word] !== void 0? lang[user_lang][word]: word
 }