import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { DataTable } from 'react-native-paper';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      <DataTable.Header>
        <DataTable.Title style={{ flex: 1.5 }}>Nama</DataTable.Title>
        <DataTable.Title style={{ flex: 2 }}>Aktifkan</DataTable.Title>
        <DataTable.Title style={{ flex: 2 }}>Nonaktifkan</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Freedom</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Freedom(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonFreedom(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Prosperity</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Prosperity(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonProsperity(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Transience</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Transience(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonTransience(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Decarabian</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Decarabian(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonDecarabian(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Guyun</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Guyun(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonGuyun(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Distant Sea</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Distant(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonDistant(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Elegance</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Elegance(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonElegance(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Resistance</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Resistance(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonResistance(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Diligence</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Diligence(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonDiligence(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Boreal Wolf</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Boreal(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonBoreal(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Mist Veiled Elixir</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Mist(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonMist(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Narukami</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Narukami(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonNarukami(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Ballad</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Ballad(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonBallad(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Gold</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Gold(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonGold(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Light</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Light(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonLight(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Dandelion Gladiator</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Dandelion(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonDandelion(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Aerosiderite</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Aerosiderite(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonAerosiderite(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{ flex: 1.5 }}>Mask</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await Mask(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Aktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>
          <TouchableOpacity style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
            onPress={async () => { await nonMask(); }}>
            <Text style={{
              fontWeight: 600,
              fontSize: 12,
              color: "black",
            }}> Nonaktifkan </Text>
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
    </View>
  );
}

async function Freedom() {
  await Notifications.FreedomAsync({
    content: {
      title: "Buku Talent Mondstadt",
      body: 'Kamu Dapat Farming Freedom di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
}
async function Prosperity() {
  await Notifications.ProsperityAsync({
    content: {
      title: "Buku Talent Liyue",
      body: 'Kamu Dapat Farming Prosperity di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
}
async function Transience() {
  await Notifications.TransienceAsync({
    content: {
      title: "Buku Talent Inazuma",
      body: 'Kamu Dapat Farming Transience di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
}
async function Decarabian() {
  await Notifications.DecarabianAsync({
    content: {
      title: "Material Senjata Mondstadt",
      body: 'Kamu Dapat Farming Decarabian di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
}
async function Guyun() {
  await Notifications.GuyunAsync({
    content: {
      title: "Material Senjata Liyue",
      body: 'Kamu Dapat Farming Guyun di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
}
async function Distant() {
  await Notifications.DistantAsync({
    content: {
      title: "Material Senjata Inazuma",
      body: 'Kamu Dapat Farming Distant Sea di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
}
async function Resistance() {
  await Notifications.ResistanceAsync({
    content: {
      title: "Buku Talent Mondstadt",
      body: 'Kamu Dapat Farming Resistance di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
}
async function Diligence() {
  await Notifications.DiligenceAsync({
    content: {
      title: "Buku Talent Liyue",
      body: 'Kamu Dapat Farming Diligence di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
}
async function Elegance() {
  await Notifications.EleganceAsync({
    content: {
      title: "Buku Talent Inazuma",
      body: 'Kamu Dapat Farming Elegance di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
}
async function Boreal() {
  await Notifications.BorealAsync({
    content: {
      title: "Material Senjata Mondstadt",
      body: 'Kamu Dapat Farming Boreal Wolf di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
}
async function Mist() {
  await Notifications.MistAsync({
    content: {
      title: "Material Senjata Liyue",
      body: 'Kamu Dapat Farming Mist Veiled Elixir di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
}
async function Narukami() {
  await Notifications.NarukamiAsync({
    content: {
      title: "Material Senjata Inazuma",
      body: 'Kamu Dapat Farming Narukami di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
}
async function Ballad() {
  await Notifications.BalladAsync({
    content: {
      title: "Buku Talent Mondstadt",
      body: 'Kamu Dapat Farming Ballad di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
}
async function Gold() {
  await Notifications.GoldAsync({
    content: {
      title: "Buku Talent Liyue",
      body: 'Kamu Dapat Farming Gold di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
}
async function Light() {
  await Notifications.LightAsync({
    content: {
      title: "Buku Talent Inazuma",
      body: 'Kamu Dapat Farming Light di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
}
async function Dandelion() {
  await Notifications.DandelionAsync({
    content: {
      title: "Material Senjata Mondstadt",
      body: 'Kamu Dapat Farming Dandelion Gladiator di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
}
async function Aerosiderite() {
  await Notifications.AerosideriteAsync({
    content: {
      title: "Material Senjata Liyue",
      body: 'Kamu Dapat Farming Aerosiderite di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
}
async function Mask() {
  await Notifications.MaskAsync({
    content: {
      title: "Material Senjata Inazuma",
      body: 'Kamu Dapat Farming Mask di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
}
async function nonFreedom() {
  const non = await Notifications.FreedomAsync({
    content: {
      title: "Buku Talent Mondstadt",
      body: 'Kamu Dapat Farming Freedom di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelFreedomAsync(non);
}
async function nonProsperity() {
  const non = await Notifications.ProsperityAsync({
    content: {
      title: "Buku Talent Liyue",
      body: 'Kamu Dapat Farming Prosperity di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelProsperityAsync(non);
}
async function nonTransience() {
  const non = await Notifications.TransienceAsync({
    content: {
      title: "Buku Talent Inazuma",
      body: 'Kamu Dapat Farming Transience di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelTransienceAsync(non);
}
async function nonDecarabian() {
  const non = await Notifications.DecarabianAsync({
    content: {
      title: "Material Senjata Mondstadt",
      body: 'Kamu Dapat Farming Decarabian di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelDecarabianAsync(non);
}
async function nonGuyun() {
  const non = await Notifications.GuyunAsync({
    content: {
      title: "Material Senjata Liyue",
      body: 'Kamu Dapat Farming Guyun di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelGuyunAsync(non);
}
async function nonDistant() {
  const non = await Notifications.DistantAsync({
    content: {
      title: "Material Senjata Inazuma",
      body: 'Kamu Dapat Farming Distant Sea di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 2 & 5,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelDistantAsync(non);
}
async function nonResistance() {
  const non = await Notifications.ResistanceAsync({
    content: {
      title: "Buku Talent Mondstadt",
      body: 'Kamu Dapat Farming Resistance di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelResistanceAsync(non);
}
async function nonDiligence() {
  const non = await Notifications.DiligenceAsync({
    content: {
      title: "Buku Talent Liyue",
      body: 'Kamu Dapat Farming Diligence di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelDiligenceAsync(non);
}
async function nonElegance() {
  const non = await Notifications.EleganceAsync({
    content: {
      title: "Buku Talent Inazuma",
      body: 'Kamu Dapat Farming Elegance di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelEleganceAsync(non);
}
async function nonBoreal() {
  const non = await Notifications.BorealAsync({
    content: {
      title: "Material Senjata Mondstadt",
      body: 'Kamu Dapat Farming Boreal Wolf di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelBorealAsync(non);
}
async function nonMist() {
  const non = await Notifications.MistAsync({
    content: {
      title: "Material Senjata Liyue",
      body: 'Kamu Dapat Farming Mist Veiled Elixir di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelMistAsync(non);
}
async function nonNarukami() {
  const non = await Notifications.NarukamiAsync({
    content: {
      title: "Material Senjata Inazuma",
      body: 'Kamu Dapat Farming Narukami di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 3 & 6,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelNarukamiAsync(non);
}
async function nonBallad() {
  const non = await Notifications.BalladAsync({
    content: {
      title: "Buku Talent Mondstadt",
      body: 'Kamu Dapat Farming Ballad di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelBalladAsync(non);
}
async function nonGold() {
  const non = await Notifications.GoldAsync({
    content: {
      title: "Buku Talent Liyue",
      body: 'Kamu Dapat Farming Gold di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelGoldAsync(non);
}
async function nonLight() {
  const non = await Notifications.LightAsync({
    content: {
      title: "Buku Talent Inazuma",
      body: 'Kamu Dapat Farming Light di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelLightAsync(non);
}
async function nonDandelion() {
  const non = await Notifications.DandelionAsync({
    content: {
      title: "Material Senjata Mondstadt",
      body: 'Kamu Dapat Farming Dandelion Gladiator di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelDandelionAsync(non);
}
async function nonAerosiderite() {
  const non = await Notifications.AerosideriteAsync({
    content: {
      title: "Material Senjata Liyue",
      body: 'Kamu Dapat Farming Aerosiderite di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelAerosideriteAsync(non);
}
async function nonMask() {
  const non = await Notifications.MaskAsync({
    content: {
      title: "Material Senjata Inazuma",
      body: 'Kamu Dapat Farming Mask di Domainnya',
    },
    trigger: {
      repeats: true,
      weekday: 1 & 4 & 7,
      hour: 3,
      minute: 0
    },
  });
  await Notifications.cancelMaskAsync(non);
}


async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});