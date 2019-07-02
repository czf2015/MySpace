#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void main() {
	double a[50000000];
	const int count = 50000000;
	for (int i = 0; i < count; i++) {
		a[i] = rand() / RAND_MAX;
		i++;
		a[i] = -rand() / RAND_MAX;
	}

	int start = clock();

	double l, d, t; //l表示相邻光标的距离，d表示相邻点到中心的距离差，t比较相邻值的大小
	double temp = a[0];
	double s = a[0];           //s表示光标相对中心的位置
	if (a[0] < 0) {
		a[0] = -a[0];
	}
	double r = a[0]; //r表示光标到中心的距离
	for (int i = 1; i < count; i++) {
		s += a[i];
		t = a[i] - temp;
		if (t < 0) {
			l -= t;
		} else {
			l += t;
		}
		temp = a[i];

		if (a[i] < 0) {
			a[i] = -a[i];
		}
		r += a[i];
		t = a[i] - a[i-1];
		if (t < 0) {
			d -= t;
		} else {
			d += t;
		}
	}

	int end = clock();

	printf("%f %f %f %f %d", s/count, r/count, l/(count-1), d/(count-1), end-start);
}
