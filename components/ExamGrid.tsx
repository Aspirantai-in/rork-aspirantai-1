import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Check } from 'lucide-react-native';
import { Colors } from '@/constants/colors';
import { EXAM_OPTIONS } from '@/constants/onboarding';

type ExamGridProps = {
  selectedExam: string | null;
  onSelectExam: (exam: string) => void;
};

export default function ExamGrid({ selectedExam, onSelectExam }: ExamGridProps) {
  return (
    <View style={styles.container}>
      {EXAM_OPTIONS.map((exam) => (
        <TouchableOpacity
          key={exam}
          style={[
            styles.examButton,
            selectedExam === exam && styles.examButtonSelected,
          ]}
          onPress={() => onSelectExam(exam)}
        >
          <Text
            style={[
              styles.examText,
              selectedExam === exam && styles.examTextSelected,
            ]}
          >
            {exam}
          </Text>
          {selectedExam === exam && (
            <View style={styles.checkmark}>
              <Check size={20} color={Colors.background.white} />
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
    paddingHorizontal: 20,
  },
  examButton: {
    width: '48%',
    height: 70,
    backgroundColor: Colors.background.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.input.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  examButtonSelected: {
    backgroundColor: '#286295',
    borderColor: '#286295',
  },
  examText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#286295',
  },
  examTextSelected: {
    color: Colors.background.white,
  },
  checkmark: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});