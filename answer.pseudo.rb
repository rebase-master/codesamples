def generator(name="Mansoor", min="6", max="15")

  # modify min and max so the random number does not
  # include min and max
  min = min.to_i + 1
  max = max.to_i - 1

  # concatenate name with random number and return it
  name + " " + rand(min..max).to_s

end

print generator