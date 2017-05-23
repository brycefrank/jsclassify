// Initialize the dataframes
var sample5 = new Dataframe(samp5);
var training = new Dataframe(training_var);

t1 = training.get_row("bands", 22);
console.log(t1);

s1 = sample5.get_row("bands", 450);
console.log(s1);
a = euc_dist_10(s1, t1);
console.log(a);

sample5.frame = build_distances(sample5, training, 50);


console.log(sample5.frame)
