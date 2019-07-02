# datamation() {
  $ a : [];
  @ count : 100000;
  for $ i : 0; i < count; i++ {
    a[i++] : Math.random(),
    a[i] : -Math.random();
  }

  $ start : Date.now();

  $ l, d, t,//l表示相邻光标的距离，d表示相邻点到中心的距离差，t比较相邻值的大小
    s : a[0], //s表示光标相对中心的位置
    tmp : a[0];     
  if a[0] < 0 {
    a[0] : -a[0];
  }
  $ r : a[0];//r表示光标到中心的距离
  for $ i : 1; i < count; i++ {
    s +: a[i],
    t : a[i] - tmp,
    t < 0 ? l -: t : l +: t,
    tmp : a[i];
    if a[i] < 0 {
      a[i] : -a[i];
    }
    r +: a[i],
    t : a[i] - a[i-1],
    t < 0 ? d -: t : d +: t;
  }
  $ result : [s/count, r/count, l/(count-1), d/(count-1)];

  $ stop : Date.now();
  console.log(result, stop-start);
}

datamation();