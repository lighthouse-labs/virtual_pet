const breed = require('./breeder.js')

const pet1 ={
body_color_gene_blue:
100,
body_color_gene_green:
150,
body_color_gene_red:
200,
body_pattern_gene:
3,
body_pattern_gene_blue:
100,
body_pattern_gene_green:
150,
body_pattern_gene_red:
150,
ear_size_gene:
50,
ear_type_gene:
2,
eye_color_gene_blue:
200,
eye_color_gene_green:
50,
eye_color_gene_red:
50,
eye_type_gene:
3,
feet_type_gene:
1,
gender:
"m",
happiness_at_time_last_fed:
40,
hunger_at_time_last_fed:
75,
id:
5,
intelligence_gene:
2,
max_age_gene:
10,
name:
"Bubbles",
nose_type_gene:
3,
strength_gene:
4,
time_at_birth:
"1558644565044",
time_last_fed_or_work:
"1558644737844",
time_last_mated:
"1558644565044",
user_id:
1
}

const pet2 = {
body_color_gene_blue:
200,
body_color_gene_green:
200,
body_color_gene_red:
200,
body_pattern_gene:
2,
body_pattern_gene_blue:
65,
body_pattern_gene_green:
116,
body_pattern_gene_red:
179,
ear_size_gene:
30,
ear_type_gene:
3,
eye_color_gene_blue:
50,
eye_color_gene_green:
174,
eye_color_gene_red:
113,
eye_type_gene:
2,
feet_type_gene:
2,
gender:
"f",
happiness_at_time_last_fed:
80,
hunger_at_time_last_fed:
40,
id:
6,
intelligence_gene:
4,
max_age_gene:
20,
name:
"Eureka",
nose_type_gene:
1,
strength_gene:
2,
time_at_birth:
"1558644565044",
time_last_fed_or_work:
"1558644737844",
time_last_mated:
"1558644565044",
user_id:
1}

console.log(breed(1,pet1,pet2))






