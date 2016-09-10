#[allow(unused_variables)]
fn main() {
    for _ in 0..98 {
        let _ = String::from("eat pie");
    }

    let mut x = String::new();
    for _ in 0..1_000_000 {
        x.push('a');
    }

    let squiggly = f32::sqrt(5.0);
    println!("Hi");
}
