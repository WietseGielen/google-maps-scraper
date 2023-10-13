function parse() {
  let inputString = window.APP_INITIALIZATION_STATE[3][6]
  let substringToRemove = ")]}'"

  let modifiedString
  if (inputString.startsWith(substringToRemove)) {
    modifiedString = inputString.slice(substringToRemove.length)
  } else {
  }
  return JSON.parse(modifiedString)
}

function get_rating(data) {
  return data?.[6]?.[4]?.[7]
}

function get_reviews(data) {
  return data?.[6]?.[4]?.[8]
}

function get_title(data) {
  return data?.[6]?.[11]
}

function get_address(data) {
  return data?.[6]?.[18]
}

function get_main_category(data) {
  return data?.[6]?.[13]?.[0]
}

function get_email(data) {
  return ''
}

function get_phone_number(data) {
  return data?.[6]?.[178]?.[0]?.[0]
}

function get_website(data) {
  return data?.[6]?.[7]?.[0]
}

function get_more_data() {
  let data = parse()

  let rating = get_rating(data)
  let reviews = get_reviews(data)

  let title = get_title(data)
  let address = get_address(data)
  let main_category = get_main_category(data)
  let email = get_email(data)
  let phone_number = get_phone_number(data)
  let website = get_website(data)


  return {
    title,
    main_category,
    rating,
    reviews,
    address,
    email,
    phone_number,
    website
  }
}

return get_more_data()
