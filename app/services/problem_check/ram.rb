# frozen_string_literal: true

class ProblemCheck::Ram < ProblemCheck
  self.priority = "low"

  def call
    return no_problem if !MemInfo.new.mem_total
    return no_problem if MemInfo.new.mem_total > 950_000

    problem
  end

  private

  def translation_key
    "dashboard.memory_warning"
  end
end
