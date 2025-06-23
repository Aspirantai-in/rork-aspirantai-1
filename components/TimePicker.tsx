import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronUp, ChevronDown } from 'lucide-react-native';
import { Colors } from '@/constants/colors';

type TimePickerProps = {
  hour: string;
  minute: string;
  period: 'AM' | 'PM';
  onChangeHour: (hour: string) => void;
  onChangeMinute: (minute: string) => void;
  onChangePeriod: (period: 'AM' | 'PM') => void;
};

export default function TimePicker({
  hour,
  minute,
  period,
  onChangeHour,
  onChangeMinute,
  onChangePeriod,
}: TimePickerProps) {
  const incrementHour = () => {
    const newHour = parseInt(hour) + 1;
    if (newHour > 12) {
      onChangeHour('01');
    } else {
      onChangeHour(newHour.toString().padStart(2, '0'));
    }
  };

  const decrementHour = () => {
    const newHour = parseInt(hour) - 1;
    if (newHour < 1) {
      onChangeHour('12');
    } else {
      onChangeHour(newHour.toString().padStart(2, '0'));
    }
  };

  const incrementMinute = () => {
    const newMinute = parseInt(minute) + 1;
    if (newMinute > 59) {
      onChangeMinute('00');
    } else {
      onChangeMinute(newMinute.toString().padStart(2, '0'));
    }
  };

  const decrementMinute = () => {
    const newMinute = parseInt(minute) - 1;
    if (newMinute < 0) {
      onChangeMinute('59');
    } else {
      onChangeMinute(newMinute.toString().padStart(2, '0'));
    }
  };

  const togglePeriod = () => {
    onChangePeriod(period === 'AM' ? 'PM' : 'AM');
  };

  return (
    <View style={styles.container}>
      {/* Hour */}
      <View style={styles.section}>
        <TouchableOpacity onPress={incrementHour}>
          <ChevronUp size={24} color={Colors.text.dark} />
        </TouchableOpacity>
        <Text style={styles.timeText}>{hour}</Text>
        <TouchableOpacity onPress={decrementHour}>
          <ChevronDown size={24} color={Colors.text.dark} />
        </TouchableOpacity>
      </View>

      <Text style={styles.separator}>:</Text>

      {/* Minute */}
      <View style={styles.section}>
        <TouchableOpacity onPress={incrementMinute}>
          <ChevronUp size={24} color={Colors.text.dark} />
        </TouchableOpacity>
        <Text style={styles.timeText}>{minute}</Text>
        <TouchableOpacity onPress={decrementMinute}>
          <ChevronDown size={24} color={Colors.text.dark} />
        </TouchableOpacity>
      </View>

      {/* AM/PM */}
      <View style={styles.section}>
        <TouchableOpacity onPress={togglePeriod}>
          <ChevronUp size={24} color={Colors.text.dark} />
        </TouchableOpacity>
        <Text style={styles.timeText}>{period}</Text>
        <TouchableOpacity onPress={togglePeriod}>
          <ChevronDown size={24} color={Colors.text.dark} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  section: {
    alignItems: 'center',
    gap: 10,
  },
  timeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#286295',
  },
  separator: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.text.dark,
    marginTop: 10,
  },
});