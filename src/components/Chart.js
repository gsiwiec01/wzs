import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = () => {
  const data = {
    datasets: [{
      text: '228',
      data: [210.1, 103.4, 11.5, 184.5, 68, 116.7, 214.6, 102.1, 117.6, 8, 809.3, 102.7, 502.5, 113.1, 37.7, 65.5, 34.5],
      backgroundColor: [
        '#F43F5E',
        '#EC4899',
        '#D946EF',
        '#A855F7',
        '#8B5CF6',
        '#6366F1',
        '#3B82F6',
        '#0EA5E9',
        '#06B6D4',
        '#14B8A6',
        '#10B981',
        '#22C55E',
        '#84CC16',
        '#EAB308',
        '#F59E0B',
        '#F97316',
        '#EF4444'
      ]
    }],
    labels: [
      'Bułgaria',
      'Chorwacja',
      'Cypr',
      'Czechy',
      'Estonia',
      'Grecja',
      'Węgry',
      'Łotwa',
      'Litwa',
      'Malta',
      'Polska',
      'Portugalia',
      'Rumunia',
      'Słowacja',
      'Słowenia',
      'Fundusz Norweski i EOG na rzecz zatrudnienia młodych',
      'Fundusz Norweski i EOG na rzecz działań regionalnych'
    ]
  };

  return <>
    <Doughnut
      width="100%"
      data={data}
    />
  </>
}

export default Chart;