export default function flattenTranscription(json) {
  const flattenedWords = json.segments.reduce((result, segment) => {
    return result.concat(
      segment.words.map((word) => ({
        start: word.start,
        text: word.text.replace(/<br>/g, "") + " ",
      }))
    );
  }, []);
  return flattenedWords;
}
