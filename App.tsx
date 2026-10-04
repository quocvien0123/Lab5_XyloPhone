import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import { useAudioPlayer, AudioSource } from 'expo-audio';

interface KeyConfig {
  note: string;
  color: string;
  source: AudioSource;
}

const KEYS_DATA: readonly KeyConfig[] = [
  { note: 'C', color: '#E11D48', source: require('./assets/audio/note1.mp3') }, // Rose Red
  { note: 'D', color: '#EA580C', source: require('./assets/audio/note2.mp3') }, // Orange
  { note: 'E', color: '#D97706', source: require('./assets/audio/note3.mp3') }, // Amber
  { note: 'F', color: '#059669', source: require('./assets/audio/note4.mp3') }, // Emerald Green
  { note: 'G', color: '#0891B2', source: require('./assets/audio/note5.mp3') }, // Cyan / Teal
  { note: 'A', color: '#2563EB', source: require('./assets/audio/note6.mp3') }, // Royal Blue
  { note: 'B', color: '#7C3AED', source: require('./assets/audio/note7.mp3') }, // Violet / Purple
] as const;

interface XylophoneKeyProps {
  note: string;
  color: string;
  source: AudioSource;
}

function XylophoneKey({ note, color, source }: XylophoneKeyProps) {
  const player = useAudioPlayer(source);

  const playNote = async () => {
    try {
      await player.seekTo(0);
      player.play();
    } catch {
      player.play();
    }
  };

  return (
    <Pressable
      onPress={playNote}
      style={({ pressed }) => [
        styles.keyBar,
        { backgroundColor: color },
        pressed && styles.keyBarPressed,
      ]}
    >
      <View style={styles.screwHoleLeft} />
      <Text style={styles.noteLabel}>{note}</Text>
      <View style={styles.screwHoleRight} />
    </Pressable>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <RNStatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Xylophone</Text>
        <Text style={styles.subtitle}>Tap any key to play a note</Text>
      </View>

      {/* 7 Vertical Xylophone Bars */}
      <View style={styles.keysContainer}>
        {KEYS_DATA.map((item) => (
          <XylophoneKey
            key={item.note}
            note={item.note}
            color={item.color}
            source={item.source}
          />
        ))}
      </View>

      {/* Footer with Student Info */}
      <View style={styles.footer}>
        <Text style={styles.studentName}>Nguyễn Anh Tuấn - 23IT297</Text>
        <Text style={styles.studentClass}>Lớp: 23SE2 • Lab 05 - Xylophone</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // Dark Slate
    paddingTop: Platform.OS === 'android' ? (RNStatusBar.currentHeight ?? 0) : 0,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#94A3B8',
    marginTop: 2,
  },
  keysContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  keyBar: {
    flex: 1,
    marginVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  keyBarPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.85,
  },
  noteLabel: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  screwHoleLeft: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  screwHoleRight: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 14,
  },
  studentName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E2E8F0',
    letterSpacing: 0.5,
  },
  studentClass: {
    fontSize: 12,
    fontWeight: '500',
    color: '#94A3B8',
    marginTop: 2,
  },
});
